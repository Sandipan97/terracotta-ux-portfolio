
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
    ...props 
  }, ref) => {
    const [imgSrc, setImgSrc] = React.useState<string | undefined>(src);
    const [error, setError] = React.useState(false);

    const handleError = () => {
      if (!error) {
        setImgSrc(fallbackSrc);
        setError(true);
      }
    };

    React.useEffect(() => {
      setImgSrc(src);
      setError(false);
    }, [src]);

    const imageStyle = {
      objectFit,
      objectPosition,
      aspectRatio,
      maxWidth,
      maxHeight,
    };

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt || "Image"}
        onError={handleError}
        className={cn("object-cover", className)}
        style={imageStyle}
        data-lovable-editable={editableKey}
        {...props}
      />
    );
  }
);

EditableImage.displayName = "EditableImage";

export { EditableImage };
