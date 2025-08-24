
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Project Assets Repository
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse and manage project images, wireframes, and visual assets used across the portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allImages.map((imagePath, index) => {
            const category = getImageCategory(imagePath);
            const categoryName = formatCategoryName(category);
            
            return (
              <motion.div
                key={imagePath}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-3 aspect-video overflow-hidden rounded-lg bg-muted">
                      <EditableImage
                        src={imagePath}
                        alt={`Project asset ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        fallbackSrc="/placeholder.svg"
                      />
                      
                      {/* Overlay with actions */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setSelectedImage(imagePath)}
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => copyImagePath(imagePath)}
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => downloadImage(imagePath)}
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {categoryName}
                      </Badge>
                      <p className="text-sm text-muted-foreground truncate">
                        {imagePath.split('/').pop()}
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
            <div className="max-w-4xl max-h-full">
              <EditableImage
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-full object-contain"
                fallbackSrc="/placeholder.svg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageRepository;
