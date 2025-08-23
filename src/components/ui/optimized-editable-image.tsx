
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
    
    // Fast path for local assets and critical images
    const isCritical = priority === 'critical' || eager;
    const isLocal = isLocalAsset(normalizedSrc);
    const shouldLoadImmediately = isLocal || isCritical || !lazy;

    const [imgSrc, setImgSrc] = useState<string | undefined>(
      shouldLoadImmediately ? normalizedSrc : undefined
    );
    const [loading, setLoading] = useState(!shouldLoadImmediately);
    const [error, setError] = useState(false);
    const [isVisible, setIsVisible] = useState(shouldLoadImmediately);
    
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Enhanced intersection observer for non-critical images
    useEffect(() => {
      if (shouldLoadImmediately || isVisible) return;

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
          rootMargin: priority === 'high' ? '200px' : '100px',
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
    }, [shouldLoadImmediately, isVisible, priority]);

    // Optimized image loading logic
    useEffect(() => {
      if (!normalizedSrc || !isVisible) return;

      const loadImage = async () => {
        try {
          setLoading(true);
          
          // Instant loading for local assets
          if (isLocal) {
            setImgSrc(normalizedSrc);
            setLoading(false);
            setError(false);
            return;
          }

          // Critical images: direct loading to avoid preloader delays
          if (isCritical) {
            setImgSrc(normalizedSrc);
            setError(false);
            return;
          }

          // Non-critical external images: use optimized preloader
          try {
            await imagePreloader.preload(normalizedSrc, { 
              priority: priority as 'high' | 'medium' | 'low',
              eager: false,
              timeout: priority === 'high' ? 5000 : 8000
            });
            
            setImgSrc(normalizedSrc);
            setError(false);
          } catch {
            // Fallback to direct loading if preloader fails
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
    }, [normalizedSrc, isVisible, normalizedFallbackSrc, isLocal, isCritical, priority]);

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

    // Enhanced loading skeleton with shimmer
    if (loading || !isVisible) {
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
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {loading && isVisible && (
            <div className="w-6 h-6 border-2 border-muted-foreground/20 border-t-foreground/40 rounded-full animate-spin z-10" />
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
        loading={isCritical ? 'eager' : 'lazy'}
        decoding="async"
        sizes={responsive ? sizes : undefined}
        {...props}
      />
    );
  }
);

OptimizedEditableImage.displayName = "OptimizedEditableImage";

export { OptimizedEditableImage };
