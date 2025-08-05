
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
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
    const [imgSrc, setImgSrc] = useState<string | undefined>(
      lazy && !eager ? undefined : src
    );
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(!lazy || eager);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Enhanced intersection observer for lazy loading
    useEffect(() => {
      if (!lazy || isVisible || eager) return;

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
          rootMargin: '100px', // Start loading 100px before visible
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
    }, [lazy, isVisible, eager]);

    // Enhanced image loading with better error handling
    useEffect(() => {
      if (!isVisible || !src) return;

      const loadImage = async () => {
        try {
          setLoading(true);
          
          // For lovable-uploads, load directly to avoid CORS issues
          if (src.includes('lovable-uploads')) {
            setImgSrc(src);
            setLoading(false);
            setError(false);
            return;
          }

          // Check if image is already preloaded
          if (imagePreloader.isLoaded(src)) {
            setImgSrc(src);
            setLoading(false);
            setError(false);
            return;
          }

          // Preload image with enhanced options
          await imagePreloader.preload(src, { 
            priority,
            eager: eager || priority === 'high',
            crossOrigin: ''
          });
          
          setImgSrc(src);
          setError(false);
        } catch (err) {
          console.warn(`Failed to load image: ${src}`, err);
          
          // Enhanced fallback strategy - try direct loading for lovable-uploads
          if (!error && src !== fallbackSrc) {
            try {
              // For lovable-uploads, try direct browser loading without preloader
              if (src.includes('lovable-uploads')) {
                setImgSrc(src);
                setError(false);
              } else {
                // Try to load fallback
                await imagePreloader.preload(fallbackSrc, { priority: 'high' });
                setImgSrc(fallbackSrc);
                setError(true);
              }
            } catch {
              // Ultimate fallback - let browser handle it
              setImgSrc(fallbackSrc);
              setError(true);
            }
          }
        } finally {
          setLoading(false);
        }
      };

      loadImage();
    }, [src, isVisible, fallbackSrc, error, priority, eager]);

    const handleError = () => {
      if (!error && src !== fallbackSrc) {
        setImgSrc(fallbackSrc);
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
      willChange: loading ? 'opacity' : 'auto',
    };

    const baseClasses = responsive 
      ? "w-full h-full object-cover transition-opacity duration-300" 
      : "object-cover transition-opacity duration-300";

    // Enhanced loading skeleton with pulse animation
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
          {/* Progressive loading shimmer effect */}
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
        crossOrigin={undefined}
        {...props}
      />
    );
  }
);

EditableImage.displayName = "EditableImage";

export { EditableImage };
