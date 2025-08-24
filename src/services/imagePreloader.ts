
import { buildPublicUrl, isLocalAsset } from '@/lib/assets';

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
  private maxConcurrentLoads = 6; // Increased for better performance on project pages
  private activeLoads = 0;

  // Skip preloading for problematic hosts
  private skipHosts = ['images.unsplash.com', 'unsplash.com'];

  private getFullImageUrl(src: string): string {
    if (isLocalAsset(src)) {
      return buildPublicUrl(src);
    }
    return src;
  }

  private shouldSkipPreload(src: string): boolean {
    // Skip preloading for local assets to avoid unnecessary overhead
    if (isLocalAsset(src)) {
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
      const timeout = options.timeout || (options.priority === 'high' ? 5000 : 10000);

      if (options.eager) {
        img.loading = 'eager';
      }

      // Enhanced image loading attributes for better performance
      img.decoding = 'async';
      if (options.crossOrigin) {
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

  // Enhanced background preload with better performance
  preloadAllImages(): void {
    import('./imageInventory').then(({ getAllImages }) => {
      const allImages = getAllImages();
      
      // Only preload external images in background
      const externalImages = allImages.filter(src => !isLocalAsset(src));
      
      // Stagger loading with reduced delay for better performance
      let delay = 0;
      externalImages.forEach((src) => {
        setTimeout(() => {
          this.preload(src, { priority: 'low' }).catch(() => {
            // Silent fail for background preloading
          });
        }, delay);
        delay += 100; // Reduced delay between images
      });
    });
  }

  // Enhanced route-specific preloading with better concurrency
  preloadForRoute(pathname: string): void {
    import('./imageInventory').then(({ getCriticalImages, getProjectImages }) => {
      const criticalImages = getCriticalImages();
      
      // Preload all critical images with high priority
      const externalCriticalImages = criticalImages.filter(src => !isLocalAsset(src));
      if (externalCriticalImages.length > 0) {
        this.preloadMultiple(externalCriticalImages, { priority: 'high', eager: true });
      }

      // Enhanced route-specific preloading
      if (pathname === '/') {
        // Homepage: preload key external project images
        const homeImages = [
          ...getProjectImages('welbilt-kitchen-connect'),
          ...getProjectImages('pg-datalogger')
        ].filter(src => !isLocalAsset(src)).slice(0, 6); // Increased limit
        
        if (homeImages.length > 0) {
          this.preloadMultiple(homeImages, { priority: 'medium' });
        }
      } else if (pathname.startsWith('/projects/pg-datalogger')) {
        // PG Datalogger specific optimizations
        const pgImages = [
          'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGold.webp',
          'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGnew.webp',
          'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/pg heuristic 2.webp'
        ];
        this.preloadMultiple(pgImages, { priority: 'high', eager: true });
      } else if (pathname.startsWith('/projects/')) {
        // Specific project page - preload external images with higher limits
        const projectSlug = pathname.split('/projects/')[1];
        const projectImages = getProjectImages(projectSlug).filter(src => !isLocalAsset(src));
        if (projectImages.length > 0) {
          this.preloadMultiple(projectImages.slice(0, 8), { priority: 'high', eager: true });
        }
      }
    });
  }
}

export const imagePreloader = new ImagePreloader();

// Initialize background preloading with optimized delay
setTimeout(() => {
  imagePreloader.preloadAllImages();
}, 3000); // Reduced delay for faster background loading
