
import React from 'react';
import { cn } from '@/lib/utils';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  aspectRatio?: string;
  maxWidth?: string;
  maxHeight?: string;
  editableKey?: string;
  responsive?: boolean;
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
    ...props 
  }, ref) => {
    const [imgSrc, setImgSrc] = React.useState<string | undefined>(src);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleError = () => {
      if (!error) {
        setImgSrc(fallbackSrc);
        setError(true);
      }
      setLoading(false);
    };

    const handleLoad = () => {
      setLoading(false);
    };

    React.useEffect(() => {
      setImgSrc(src);
      setError(false);
      setLoading(true);
    }, [src]);

    const imageStyle = {
      objectFit,
      objectPosition,
      aspectRatio,
      maxWidth,
      maxHeight,
    };

    const baseClasses = responsive 
      ? "w-full h-full object-cover transition-all duration-300" 
      : "object-cover";

    return (
      <>
        {loading && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-foreground/40 rounded-full animate-spin" />
          </div>
        )}
        <img
          ref={ref}
          src={imgSrc}
          alt={alt || "Image"}
          onError={handleError}
          onLoad={handleLoad}
          className={cn(baseClasses, className)}
          style={imageStyle}
          data-lovable-editable={editableKey}
          {...props}
        />
      </>
    );
  }
);

EditableImage.displayName = "EditableImage";

export { EditableImage };
