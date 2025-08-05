
interface PreloadOptions {
  priority?: 'high' | 'medium' | 'low';
  timeout?: number;
}

interface ImageCache {
  [key: string]: {
    loaded: boolean;
    error: boolean;
    promise: Promise<void>;
  };
}

class ImagePreloader {
  private cache: ImageCache = {};
  private loadingQueue: Array<{ src: string; options: PreloadOptions }> = [];
  private isProcessingQueue = false;

  preload(src: string, options: PreloadOptions = {}): Promise<void> {
    if (this.cache[src]) {
      return this.cache[src].promise;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      const timeout = options.timeout || 10000;

      const timeoutId = setTimeout(() => {
        this.cache[src] = { loaded: false, error: true, promise };
        reject(new Error(`Image load timeout: ${src}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timeoutId);
        this.cache[src] = { loaded: true, error: false, promise };
        resolve();
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        this.cache[src] = { loaded: false, error: true, promise };
        reject(new Error(`Failed to load image: ${src}`));
      };

      // Set crossOrigin to handle CORS issues
      img.crossOrigin = 'anonymous';
      img.src = src;
    });

    this.cache[src] = { loaded: false, error: false, promise };
    return promise;
  }

  preloadMultiple(srcs: string[], options: PreloadOptions = {}): Promise<void[]> {
    const promises = srcs.map(src => this.preload(src, options));
    return Promise.allSettled(promises).then(results => 
      results.map(result => result.status === 'fulfilled' ? result.value : undefined)
    ).then(values => values.filter(v => v !== undefined));
  }

  isLoaded(src: string): boolean {
    return this.cache[src]?.loaded || false;
  }

  isError(src: string): boolean {
    return this.cache[src]?.error || false;
  }

  clear(): void {
    this.cache = {};
  }

  // Preload project images based on route patterns
  preloadProjectImages(): void {
    const criticalImages = [
      '/lovable-uploads/Welbilt showcase.png',
      '/lovable-uploads/Welbilt New Design.png',
      '/lovable-uploads/PG hero.png',
      '/lovable-uploads/PG header.png',
      '/lovable-uploads/O2C competitors.png',
      '/lovable-uploads/Drip-steal.png'
    ];

    // Preload with high priority
    this.preloadMultiple(criticalImages, { priority: 'high' });
  }
}

export const imagePreloader = new ImagePreloader();
