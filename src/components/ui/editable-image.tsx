
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
    ...props 
  }, ref) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(lazy ? undefined : src);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(!lazy);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
      if (!lazy || isVisible) return;

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
          rootMargin: '50px',
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
    }, [lazy, isVisible]);

    // Load image when visible
    useEffect(() => {
      if (!isVisible || !src) return;

      const loadImage = async () => {
        try {
          setLoading(true);
          
          // Check if image is already preloaded
          if (imagePreloader.isLoaded(src)) {
            setImgSrc(src);
            setLoading(false);
            return;
          }

          // Preload image
          await imagePreloader.preload(src, { priority });
          setImgSrc(src);
          setError(false);
        } catch (err) {
          console.warn(`Failed to load image: ${src}`, err);
          if (!error) {
            setImgSrc(fallbackSrc);
            setError(true);
          }
        } finally {
          setLoading(false);
        }
      };

      loadImage();
    }, [src, isVisible, fallbackSrc, error, priority]);

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

    // Show skeleton while loading or when lazy loading
    if (loading || !isVisible) {
      return (
        <div 
          ref={imgRef}
          className={cn("bg-muted animate-pulse flex items-center justify-center", className)}
          style={imageStyle}
        >
          {loading && isVisible && (
            <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-foreground/40 rounded-full animate-spin" />
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
        loading={priority === 'high' ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
    );
  }
);

EditableImage.displayName = "EditableImage";

export { EditableImage };
