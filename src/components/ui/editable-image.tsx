
import React from 'react';
import { cn } from '@/lib/utils';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const EditableImage = React.forwardRef<HTMLImageElement, EditableImageProps>(
  ({ src, alt, className, fallbackSrc = "/placeholder.svg", ...props }, ref) => {
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

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt || "Image"}
        onError={handleError}
        className={cn("object-cover", className)}
        {...props}
      />
    );
  }
);

EditableImage.displayName = "EditableImage";

export { EditableImage };
