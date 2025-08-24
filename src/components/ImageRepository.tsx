import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';
import { Badge } from '@/components/ui/badge';
import { Download, Copy, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { IMAGE_INVENTORY, getAllImages } from '@/services/imageInventory';
const ImageRepository = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const allImages = getAllImages();
  const copyImagePath = (imagePath: string) => {
    navigator.clipboard.writeText(imagePath);
    toast.success('Image path copied to clipboard');
  };
  const downloadImage = (imagePath: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = imagePath.split('/').pop() || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const getImageCategory = (imagePath: string) => {
    for (const [category, images] of Object.entries(IMAGE_INVENTORY)) {
      if (images.includes(imagePath)) {
        return category;
      }
    }
    return 'other';
  };
  const formatCategoryName = (category: string) => {
    return category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  };
  return;
};
export default ImageRepository;