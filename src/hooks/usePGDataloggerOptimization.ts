
import { useEffect } from 'react';
import { imagePreloader } from '@/services/imagePreloader';

export const usePGDataloggerOptimization = () => {
  useEffect(() => {
    // Preload critical PG Datalogger images immediately
    const criticalPGImages = [
      '/lovable-uploads/PG heroimg.webp',
      'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGold.webp',
      'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGnew.webp',
      'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/pg heuristic 2.webp',
      '/lovable-uploads/b4c2ae55-67cd-4940-9279-f65e91d622c6.png'
    ];

    // Immediate high-priority loading
    imagePreloader.preloadMultiple(criticalPGImages, { 
      priority: 'high', 
      eager: true,
      timeout: 3000 
    }).then((results) => {
      const successCount = results.filter(result => result.status === 'fulfilled').length;
      console.log(`PG Datalogger: Successfully preloaded ${successCount}/${results.length} critical images`);
    });

    // Preload additional images with staggered loading
    setTimeout(() => {
      const additionalImages = [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/pg heuristic 1.webp',
        'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
      ];

      imagePreloader.preloadMultiple(additionalImages, { 
        priority: 'medium',
        timeout: 5000 
      });
    }, 1000);

    // Optimize browser performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Prefetch fonts during idle time
        if ('fonts' in document) {
          document.fonts.load('1em Inter');
          document.fonts.load('1em "Playfair Display"');
        }
      });
    }

  }, []);

  return {
    isOptimized: true
  };
};
