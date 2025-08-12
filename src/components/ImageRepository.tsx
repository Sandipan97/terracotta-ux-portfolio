
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
    return category
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Image Repository
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Browse and access all design assets and project images used throughout the portfolio
          </p>
          <Badge variant="secondary" className="mt-4">
            {allImages.length} Images Available
          </Badge>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
          {allImages.map((imagePath, index) => {
            const category = getImageCategory(imagePath);
            const fileName = imagePath.split('/').pop() || '';
            
            return (
              <motion.div
                key={imagePath}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-md transition-all duration-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <EditableImage
                        src={imagePath}
                        alt={fileName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        priority="low"
                        lazy={true}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 16.66vw, (max-width: 1280px) 12.5vw, 10vw"
                      />
                      
                      {/* Overlay with actions */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setSelectedImage(imagePath)}
                          className="h-6 w-6 p-0"
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => copyImagePath(imagePath)}
                          className="h-6 w-6 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => downloadImage(imagePath)}
                          className="h-6 w-6 p-0"
                        >
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-2">
                      <Badge 
                        variant="outline" 
                        className="text-[10px] mb-1 px-1 py-0 h-4"
                      >
                        {formatCategoryName(category)}
                      </Badge>
                      <p className="text-[10px] text-muted-foreground truncate" title={fileName}>
                        {fileName}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh] relative">
              <Button
                onClick={() => setSelectedImage(null)}
                variant="secondary"
                size="sm"
                className="absolute -top-12 right-0 z-10"
              >
                Close
              </Button>
              <EditableImage
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-full object-contain rounded-lg"
                priority="high"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageRepository;
