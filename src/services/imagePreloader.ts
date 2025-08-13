
interface PreloadOptions {
  priority?: 'high' | 'medium' | 'low';
  timeout?: number;
  eager?: boolean;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
}

interface ImageCache {
  [key: string]: {
    loaded: boolean;
    error: boolean;
    promise: Promise<void>;
    element?: HTMLImageElement;
  };
}

class ImagePreloader {
  private cache: ImageCache = {};
  private loadingQueue: Array<{ src: string; options: PreloadOptions }> = [];
  private isProcessingQueue = false;
  private maxConcurrentLoads = 4; // Reduced to prevent overwhelming the browser
  private activeLoads = 0;

  // Skip preloading for problematic hosts
  private skipHosts = ['images.unsplash.com', 'unsplash.com'];

  private getFullImageUrl(src: string): string {
    if (src.startsWith('/')) {
      const baseUrl = window.location.origin;
      return `${baseUrl}${src}`;
    }
    return src;
  }

  private shouldSkipPreload(src: string): boolean {
    // Skip preloading for lovable-uploads to avoid CORS issues
    if (src.includes('lovable-uploads')) {
      return true;
    }
    
    // Skip preloading for rate-limited hosts
    return this.skipHosts.some(host => src.includes(host));
  }

  preload(src: string, options: PreloadOptions = {}): Promise<void> {
    if (this.shouldSkipPreload(src)) {
      return Promise.resolve();
    }

    const fullUrl = this.getFullImageUrl(src);
    
    if (this.cache[fullUrl]) {
      return this.cache[fullUrl].promise;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      const timeout = options.timeout || 8000; // Increased timeout

      if (options.eager) {
        img.loading = 'eager';
      }

      // Only set CORS when explicitly provided and not for local images
      if (options.crossOrigin !== undefined && !fullUrl.includes(window.location.origin)) {
        img.crossOrigin = options.crossOrigin;
      }

      const timeoutId = setTimeout(() => {
        this.cache[fullUrl] = { loaded: false, error: true, promise, element: img };
        reject(new Error(`Image load timeout: ${fullUrl}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        this.cache[fullUrl] = { loaded: true, error: false, promise, element: img };
        this.activeLoads--;
        this.processQueue();
        resolve();
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        this.cache[fullUrl] = { loaded: false, error: true, promise, element: img };
        this.activeLoads--;
        this.processQueue();
        reject(new Error(`Failed to load image: ${fullUrl}`));
      };

      // Priority-based loading
      if (options.priority === 'high' || options.eager) {
        this.activeLoads++;
        img.src = fullUrl;
      } else {
        this.queueLoad(fullUrl, options, img);
      }
    });

    this.cache[fullUrl] = { loaded: false, error: false, promise };
    return promise;
  }

  private queueLoad(src: string, options: PreloadOptions, img: HTMLImageElement) {
    this.loadingQueue.push({ src, options });
    
    if (!this.isProcessingQueue) {
      this.processQueue();
    }
  }

  private processQueue() {
    if (this.isProcessingQueue || this.activeLoads >= this.maxConcurrentLoads || this.loadingQueue.length === 0) {
      return;
    }

    this.isProcessingQueue = true;

    while (this.activeLoads < this.maxConcurrentLoads && this.loadingQueue.length > 0) {
      const { src } = this.loadingQueue.shift()!;
      const cached = this.cache[src];
      
      if (cached && cached.element) {
        this.activeLoads++;
        cached.element.src = src;
      }
    }

    this.isProcessingQueue = false;
  }

  preloadMultiple(srcs: string[], options: PreloadOptions = {}): Promise<PromiseSettledResult<void>[]> {
    const promises = srcs.map(src => this.preload(src, options));
    return Promise.allSettled(promises);
  }

  isLoaded(src: string): boolean {
    const fullUrl = this.getFullImageUrl(src);
    return this.cache[fullUrl]?.loaded || false;
  }

  isError(src: string): boolean {
    const fullUrl = this.getFullImageUrl(src);
    return this.cache[fullUrl]?.error || false;
  }

  clear(): void {
    this.cache = {};
    this.loadingQueue = [];
  }

  // Background preload with better error handling
  preloadAllImages(): void {
    import('./imageInventory').then(({ getAllImages }) => {
      const allImages = getAllImages();
      
      // Stagger loading to avoid overwhelming the browser
      let delay = 0;
      allImages.forEach((src) => {
        setTimeout(() => {
          this.preload(src, { priority: 'low' }).catch(() => {
            // Silent fail for background preloading
          });
        }, delay);
        delay += 100; // Increased delay to 100ms between images
      });
    });
  }

  // Enhanced route-specific preloading
  preloadForRoute(pathname: string): void {
    import('./imageInventory').then(({ getCriticalImages, getProjectImages }) => {
      const criticalImages = getCriticalImages();
      
      // Always preload critical lovable-uploads images (they load directly anyway)
      const localCriticalImages = criticalImages.filter(src => src.includes('lovable-uploads'));
      if (localCriticalImages.length > 0) {
        this.preloadMultiple(localCriticalImages, { priority: 'high', eager: true });
      }

      // Route-specific preloading with reduced scope
      if (pathname === '/') {
        // Homepage: preload key project images
        const homeImages = [
          ...getProjectImages('welbilt-kitchen-connect').slice(0, 2),
          ...getProjectImages('pg-datalogger').slice(0, 2)
        ].filter(src => src.includes('lovable-uploads'));
        
        this.preloadMultiple(homeImages, { priority: 'medium' });
      } else if (pathname.startsWith('/projects/')) {
        // Specific project page
        const projectSlug = pathname.split('/projects/')[1];
        const projectImages = getProjectImages(projectSlug).filter(src => src.includes('lovable-uploads'));
        if (projectImages.length > 0) {
          this.preloadMultiple(projectImages, { priority: 'high', eager: true });
        }
      }
    });
  }
}

export const imagePreloader = new ImagePreloader();

// Initialize background preloading with delay
setTimeout(() => {
  imagePreloader.preloadAllImages();
}, 3000); // Increased delay
