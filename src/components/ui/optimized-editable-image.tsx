
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { normalizeImageUrl, isLocalAsset } from '@/lib/assets';
import { imagePreloader } from '@/services/imagePreloader';

interface OptimizedEditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  aspectRatio?: string;
  maxWidth?: string;
  maxHeight?: string;
  editableKey?: string;
  responsive?: boolean;
  lazy?: boolean;
  priority?: 'critical' | 'high' | 'medium' | 'low';
  eager?: boolean;
  sizes?: string;
}

const OptimizedEditableImage = React.forwardRef<HTMLImageElement, OptimizedEditableImageProps>(
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
    
    // Critical images should load immediately without any lazy loading
    const isCritical = priority === 'critical' || eager;
    const isHighPriority = priority === 'high';
    const isLocal = isLocalAsset(normalizedSrc);
    
    // Force immediate loading for critical/high priority images
    const shouldLoadImmediately = isLocal || isCritical || isHighPriority || !lazy;

    const [imgSrc, setImgSrc] = useState<string | undefined>(
      shouldLoadImmediately ? normalizedSrc : undefined
    );
    const [loading, setLoading] = useState(!shouldLoadImmediately);
    const [error, setError] = useState(false);
    const [isVisible, setIsVisible] = useState(shouldLoadImmediately);
    
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Skip intersection observer for critical and high priority images
    useEffect(() => {
      if (shouldLoadImmediately) {
        setIsVisible(true);
        return;
      }

      const rootMargin = '100px';

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
          rootMargin,
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
    }, [shouldLoadImmediately]);

    // Simplified image loading for critical/high priority images
    useEffect(() => {
      if (!normalizedSrc || !isVisible) return;

      const loadImage = async () => {
        try {
          setLoading(true);
          
          // Immediate loading for local assets and critical images
          if (isLocal || isCritical || isHighPriority) {
            setImgSrc(normalizedSrc);
            setLoading(false);
            setError(false);
            return;
          }

          // Standard loading for other images
          try {
            await imagePreloader.preload(normalizedSrc, { 
              priority: priority as 'high' | 'medium' | 'low',
              eager: false,
              timeout: 8000
            });
            
            setImgSrc(normalizedSrc);
            setError(false);
          } catch {
            // Fallback to direct loading
            setImgSrc(normalizedSrc);
            setError(false);
          }
        } catch (err) {
          console.warn('Image loading failed:', normalizedSrc, err);
          if (normalizedSrc !== normalizedFallbackSrc) {
            setImgSrc(normalizedFallbackSrc);
            setError(true);
          }
        } finally {
          setLoading(false);
        }
      };

      loadImage();
    }, [normalizedSrc, isVisible, normalizedFallbackSrc, isLocal, isCritical, isHighPriority, priority, eager]);

    const handleError = () => {
      if (!error && imgSrc !== normalizedFallbackSrc) {
        setImgSrc(normalizedFallbackSrc);
        setError(true);
      }
      setLoading(false);
    };

    const handleLoad = () => {
      setLoading(false);
    };

    const imageStyle = {
      objectFit,
      objectPosition,
      aspectRatio,
      maxWidth,
      maxHeight,
    };

    const baseClasses = responsive 
      ? "w-full h-full object-cover" 
      : "object-cover";

    // Simplified loading state for critical images
    if (loading || (!shouldLoadImmediately && !isVisible)) {
      return (
        <div 
          ref={imgRef}
          className={cn(
            "bg-muted relative overflow-hidden flex items-center justify-center", 
            className,
            loading && "animate-pulse"
          )}
          style={imageStyle}
          role="img"
          aria-label={loading ? "Loading image..." : alt || "Image"}
        >
          {loading && isVisible && (
            <div className={cn(
              "border-2 border-muted-foreground/20 rounded-full animate-spin z-10",
              isCritical ? "w-8 h-8 border-t-primary" : "w-6 h-6 border-t-foreground/40"
            )} />
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
        className={cn(
          baseClasses, 
          className,
          "transition-opacity duration-300",
          loading ? 'opacity-0' : 'opacity-100'
        )}
        style={imageStyle}
        data-lovable-editable={editableKey}
        loading={isCritical || isHighPriority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={isCritical ? 'high' : isHighPriority ? 'high' : 'auto'}
        sizes={responsive ? sizes : undefined}
        {...props}
      />
    );
  }
);

OptimizedEditableImage.displayName = "OptimizedEditableImage";

export { OptimizedEditableImage };
