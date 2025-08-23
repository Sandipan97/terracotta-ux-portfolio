
import { buildPublicUrl, isLocalAsset } from '@/lib/assets';

interface PreloadOptions {
  priority?: 'high' | 'medium' | 'low';
  timeout?: number;
  eager?: boolean;
}

interface ImageCache {
  [key: string]: {
    loaded: boolean;
    error: boolean;
    promise: Promise<void>;
    timestamp: number;
  };
}

class OptimizedImagePreloader {
  private cache: ImageCache = {};
  private loadingQueue: Array<{ src: string; options: PreloadOptions }> = [];
  private isProcessingQueue = false;
  private maxConcurrentLoads = 4;
  private activeLoads = 0;
  private cacheExpiry = 5 * 60 * 1000; // 5 minutes

  // Network-aware settings
  private networkSettings = {
    slow: { maxConcurrent: 2, timeout: 15000 },
    fast: { maxConcurrent: 6, timeout: 5000 },
    default: { maxConcurrent: 4, timeout: 8000 }
  };

  constructor() {
    this.detectNetworkSpeed();
    this.startCacheCleanup();
  }

  private detectNetworkSpeed() {
    // @ts-ignore - Connection API might not be available in all browsers
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        this.maxConcurrentLoads = this.networkSettings.slow.maxConcurrent;
      } else if (effectiveType === '4g') {
        this.maxConcurrentLoads = this.networkSettings.fast.maxConcurrent;
      }
    }
  }

  private startCacheCleanup() {
    setInterval(() => {
      const now = Date.now();
      Object.keys(this.cache).forEach(key => {
        if (now - this.cache[key].timestamp > this.cacheExpiry) {
          delete this.cache[key];
        }
      });
    }, 60000); // Cleanup every minute
  }

  private getFullImageUrl(src: string): string {
    if (isLocalAsset(src)) {
      return buildPublicUrl(src);
    }
    return src;
  }

  preload(src: string, options: PreloadOptions = {}): Promise<void> {
    // Skip preloading for local assets - they're fast enough
    if (isLocalAsset(src)) {
      return Promise.resolve();
    }

    const fullUrl = this.getFullImageUrl(src);
    
    // Return cached promise if available and not expired
    if (this.cache[fullUrl] && Date.now() - this.cache[fullUrl].timestamp < this.cacheExpiry) {
      return this.cache[fullUrl].promise;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      const timeout = options.timeout || this.networkSettings.default.timeout;

      // Optimize for different priorities
      if (options.priority === 'high') {
        img.fetchPriority = 'high';
      }

      const timeoutId = setTimeout(() => {
        this.cache[fullUrl] = { 
          loaded: false, 
          error: true, 
          promise, 
          timestamp: Date.now() 
        };
        reject(new Error(`Image load timeout: ${fullUrl}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        this.cache[fullUrl] = { 
          loaded: true, 
          error: false, 
          promise, 
          timestamp: Date.now() 
        };
        this.activeLoads--;
        this.processQueue();
        resolve();
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        this.cache[fullUrl] = { 
          loaded: false, 
          error: true, 
          promise, 
          timestamp: Date.now() 
        };
        this.activeLoads--;
        this.processQueue();
        reject(new Error(`Failed to load image: ${fullUrl}`));
      };

      // High priority images load immediately
      if (options.priority === 'high' || options.eager) {
        this.activeLoads++;
        img.src = fullUrl;
      } else {
        this.queueLoad(fullUrl, options, img);
      }
    });

    this.cache[fullUrl] = { 
      loaded: false, 
      error: false, 
      promise, 
      timestamp: Date.now() 
    };
    return promise;
  }

  private queueLoad(src: string, options: PreloadOptions, img: HTMLImageElement) {
    this.loadingQueue.push({ src, options });
    this.processQueue();
  }

  private processQueue() {
    if (this.isProcessingQueue || this.activeLoads >= this.maxConcurrentLoads || this.loadingQueue.length === 0) {
      return;
    }

    this.isProcessingQueue = true;

    while (this.activeLoads < this.maxConcurrentLoads && this.loadingQueue.length > 0) {
      const { src } = this.loadingQueue.shift()!;
      const cached = this.cache[src];
      
      if (cached && !cached.loaded && !cached.error) {
        this.activeLoads++;
        const img = new Image();
        img.src = src;
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
    const cached = this.cache[fullUrl];
    return cached?.loaded && Date.now() - cached.timestamp < this.cacheExpiry || false;
  }

  clear(): void {
    this.cache = {};
    this.loadingQueue = [];
    this.activeLoads = 0;
  }

  // Optimized route-specific preloading
  preloadForRoute(pathname: string): void {
    import('./imageInventory').then(({ getCriticalImages, getProjectImages }) => {
      // Only preload external critical images
      const criticalImages = getCriticalImages().filter(src => !isLocalAsset(src));
      if (criticalImages.length > 0) {
        this.preloadMultiple(criticalImages.slice(0, 3), { priority: 'high', eager: true });
      }

      // Smart route-specific preloading
      if (pathname === '/') {
        const homeImages = [
          ...getProjectImages('welbilt-kitchen-connect'),
          ...getProjectImages('pg-datalogger')
        ].filter(src => !isLocalAsset(src)).slice(0, 2);
        
        if (homeImages.length > 0) {
          setTimeout(() => {
            this.preloadMultiple(homeImages, { priority: 'medium' });
          }, 1000);
        }
      } else if (pathname.startsWith('/projects/')) {
        const projectSlug = pathname.split('/projects/')[1];
        const projectImages = getProjectImages(projectSlug)
          .filter(src => !isLocalAsset(src))
          .slice(0, 4);
        
        if (projectImages.length > 0) {
          this.preloadMultiple(projectImages, { priority: 'high' });
        }
      }
    });
  }
}

export const optimizedImagePreloader = new OptimizedImagePreloader();
