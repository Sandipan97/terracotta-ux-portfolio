
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { normalizeImageUrl, isLocalAsset } from '@/lib/assets';
import { imagePreloader } from '@/services/imagePreloader';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  aspectRatio?: string;
  maxWidth?: string;
  maxHeight?: string;
  editableKey?: string;
  responsive?: boolean;
  lazy?: boolean;
  priority?: 'high' | 'medium' | 'low';
  eager?: boolean;
  sizes?: string;
}

const EditableImage = React.forwardRef<HTMLImageElement, EditableImageProps>(
  ({ 
    src, 
    alt, 
    className, 
    fallbackSrc = "/placeholder.svg", 
    objectFit = 'cover',
    objectPosition = 'center',
    aspectRatio,
    maxWidth,
    maxHeight,
    editableKey,
    responsive = true,
    lazy = true,
    priority = 'medium',
    eager = false,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    ...props 
  }, ref) => {
    const normalizedSrc = normalizeImageUrl(src || '');
    const normalizedFallbackSrc = normalizeImageUrl(fallbackSrc);

    // Simplified state management - immediate loading for local assets
    const [imgSrc, setImgSrc] = useState<string | undefined>(
      isLocalAsset(normalizedSrc) ? normalizedSrc : (lazy && !eager ? undefined : normalizedSrc)
    );
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(!isLocalAsset(normalizedSrc));
    const [isVisible, setIsVisible] = useState(!lazy || eager || isLocalAsset(normalizedSrc));
    const [retryCount, setRetryCount] = useState(0);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Intersection observer for lazy loading - skip for local assets
    useEffect(() => {
      if (!lazy || isVisible || eager || isLocalAsset(normalizedSrc)) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (observerRef.current && imgRef.current) {
                observerRef.current.unobserve(imgRef.current);
              }
            }
          });
        },
        {
          rootMargin: '100px',
          threshold: 0.1
        }
      );

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [lazy, isVisible, eager, normalizedSrc]);

    // Simplified image loading
    useEffect(() => {
      if (!normalizedSrc) return;

      // For local assets: immediate loading, no preloader
      if (isLocalAsset(normalizedSrc)) {
        setImgSrc(normalizedSrc);
        setLoading(false);
        setError(false);
        return;
      }

      // For external images: only load when visible
      if (!isVisible) return;

      const loadImage = async () => {
        try {
          setLoading(true);
          
          // For critical images (high priority or eager), skip preloader to avoid CORS/timeout issues
          const isCriticalImage = priority === 'high' || eager;
          
          if (isCriticalImage) {
            // Direct loading for critical images
            setImgSrc(normalizedSrc);
            setError(false);
          } else {
            // Use preloader for non-critical images with better error handling
            try {
              await imagePreloader.preload(normalizedSrc, { 
                priority,
                eager: false,
                timeout: 8000 // Increased timeout
              });
              
              setImgSrc(normalizedSrc);
              setError(false);
            } catch (preloadError) {
              // If preloader fails, try direct loading as fallback
              console.warn('Preloader failed, trying direct load:', preloadError);
              setImgSrc(normalizedSrc);
              setError(false);
            }
          }
        } catch (err) {
          console.warn(`Failed to load image (attempt ${retryCount + 1}):`, normalizedSrc, err);
          
          // Retry logic for transient failures
          if (retryCount < 1) {
            setTimeout(() => {
              setRetryCount(prev => prev + 1);
            }, 1000 * (retryCount + 1));
            return;
          }
          
          // Final fallback
          if (!error && normalizedSrc !== normalizedFallbackSrc) {
            setImgSrc(normalizedFallbackSrc);
            setError(true);
          }
        } finally {
          setLoading(false);
        }
      };

      loadImage();
    }, [normalizedSrc, isVisible, normalizedFallbackSrc, error, priority, eager, retryCount]);

    const handleError = () => {
      console.warn('Image failed to load:', imgSrc);
      
      // Retry once before falling back
      if (retryCount < 1 && imgSrc !== normalizedFallbackSrc) {
        setRetryCount(prev => prev + 1);
        return;
      }
      
      if (!error && imgSrc !== normalizedFallbackSrc) {
        setImgSrc(normalizedFallbackSrc);
        setError(true);
      }
      setLoading(false);
    };

    const handleLoad = () => {
      setLoading(false);
      setRetryCount(0);
    };

    const imageStyle = {
      objectFit,
      objectPosition,
      aspectRatio,
      maxWidth,
      maxHeight,
      willChange: loading ? 'opacity' : 'auto',
    };

    const baseClasses = responsive 
      ? "w-full h-full object-cover transition-opacity duration-300" 
      : "object-cover transition-opacity duration-300";

    // Enhanced loading skeleton
    if (loading || !isVisible) {
      return (
        <div 
          ref={imgRef}
          className={cn(
            "bg-muted animate-pulse flex items-center justify-center relative overflow-hidden", 
            className
          )}
          style={imageStyle}
          role="img"
          aria-label={loading ? "Loading image..." : alt || "Image"}
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {loading && isVisible && (
            <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-foreground/40 rounded-full animate-spin z-10" />
          )}
        </div>
      );
    }

    return (
      <img
        ref={ref || imgRef}
        src={imgSrc}
        alt={alt || "Image"}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(baseClasses, className, {
          'opacity-0': loading,
          'opacity-100': !loading
        })}
        style={imageStyle}
        data-lovable-editable={editableKey}
        loading={eager || priority === 'high' ? 'eager' : 'lazy'}
        decoding="async"
        sizes={responsive ? sizes : undefined}
        {...props}
      />
    );
  }
);

EditableImage.displayName = "EditableImage";

export { EditableImage };
