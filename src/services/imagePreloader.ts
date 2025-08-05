
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
  private maxConcurrentLoads = 6;
  private activeLoads = 0;

  private getFullImageUrl(src: string): string {
    // Handle relative paths and ensure proper base URL
    if (src.startsWith('/')) {
      const baseUrl = window.location.origin;
      return `${baseUrl}${src}`;
    }
    return src;
  }

  preload(src: string, options: PreloadOptions = {}): Promise<void> {
    const fullUrl = this.getFullImageUrl(src);
    
    if (this.cache[fullUrl]) {
      return this.cache[fullUrl].promise;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      const timeout = options.timeout || (options.priority === 'high' ? 5000 : 10000);

      // Set loading strategy based on options
      if (options.eager) {
        img.loading = 'eager';
      }

      // Enhanced CORS handling
      if (options.crossOrigin !== undefined) {
        img.crossOrigin = options.crossOrigin;
      } else if (src.includes('lovable-uploads')) {
        img.crossOrigin = 'anonymous';
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

  // Background preload all images after initial load
  preloadAllImages(): void {
    // Import here to avoid circular dependency
    import('./imageInventory').then(({ getAllImages }) => {
      const allImages = getAllImages();
      
      // Stagger loading to avoid overwhelming the browser
      let delay = 0;
      allImages.forEach((src) => {
        setTimeout(() => {
          this.preload(src, { priority: 'low' }).catch(() => {
            console.warn(`Failed to background preload: ${src}`);
          });
        }, delay);
        delay += 50; // 50ms between each image
      });
    });
  }

  // Predictive preloading based on current route
  preloadForRoute(pathname: string): void {
    import('./imageInventory').then(({ getCriticalImages, getProjectImages }) => {
      const criticalImages = getCriticalImages();
      
      // Always preload critical images with high priority
      this.preloadMultiple(criticalImages, { priority: 'high', eager: true });

      // Route-specific preloading
      if (pathname === '/') {
        // Homepage: preload featured project images
        this.preloadMultiple([
          ...getProjectImages('welbilt-kitchen-connect'),
          ...getProjectImages('pg-datalogger'),
          ...getProjectImages('o2c-project')
        ], { priority: 'medium' });
      } else if (pathname === '/projects') {
        // Projects page: preload all showcase images
        const showcaseImages = [
          ...getProjectImages('welbilt-kitchen-connect'),
          ...getProjectImages('pg-datalogger'),
          ...getProjectImages('o2c-project'),
          ...getProjectImages('dripometer'),
          ...getProjectImages('farm-monitoring'),
          ...getProjectImages('toy-anatomy'),
          ...getProjectImages('cyclops-ar-manual')
        ];
        this.preloadMultiple(showcaseImages, { priority: 'high' });
      } else if (pathname.startsWith('/projects/')) {
        // Specific project page
        const projectSlug = pathname.split('/projects/')[1];
        const projectImages = getProjectImages(projectSlug);
        if (projectImages.length > 0) {
          this.preloadMultiple(projectImages, { priority: 'high', eager: true });
        }
      }
    });
  }
}

export const imagePreloader = new ImagePreloader();

// Initialize background preloading after a delay
setTimeout(() => {
  imagePreloader.preloadAllImages();
}, 2000);
