
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { imagePreloader } from '@/services/imagePreloader';

const PROJECT_IMAGES = {
  'welbilt-kitchen-connect': [
    '/lovable-uploads/Welbilt showcase.png',
    '/lovable-uploads/Welbilt New Design.png'
  ],
  'pg-datalogger': [
    '/lovable-uploads/PG hero.png',
    '/lovable-uploads/PG header.png',
    '/lovable-uploads/PG before.png',
    '/lovable-uploads/PG after.png',
    '/lovable-uploads/PG after dark.png'
  ],
  'o2c-project': [
    '/lovable-uploads/O2C competitors.png'
  ],
  'dripometer': [
    '/lovable-uploads/Drip-steal.png'
  ],
  'farm-monitoring': [
    '/lovable-uploads/nurses.png',
    '/lovable-uploads/Ward panic.png'
  ],
  'toy-anatomy': [
    '/lovable-uploads/Occupy hangers.png'
  ],
  'cyclops-ar-manual': [
    '/lovable-uploads/UX audit.png'
  ]
};

const CRITICAL_IMAGES = [
  '/lovable-uploads/Welbilt showcase.png',
  '/lovable-uploads/PG hero.png',
  '/lovable-uploads/O2C competitors.png'
];

export const useRoutePreloader = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload critical images immediately
    imagePreloader.preloadMultiple(CRITICAL_IMAGES, { priority: 'high' });

    // Preload project images based on current route
    const currentPath = location.pathname;
    
    if (currentPath === '/') {
      // On homepage, preload all critical project images
      const allProjectImages = Object.values(PROJECT_IMAGES).flat();
      imagePreloader.preloadMultiple(allProjectImages, { priority: 'medium' });
    } else if (currentPath === '/projects') {
      // On projects page, preload thumbnail images
      const thumbnailImages = Object.values(PROJECT_IMAGES).map(images => images[0]);
      imagePreloader.preloadMultiple(thumbnailImages, { priority: 'high' });
    } else if (currentPath.startsWith('/projects/')) {
      // On specific project page, preload that project's images with high priority
      const projectSlug = currentPath.split('/projects/')[1];
      const projectImages = PROJECT_IMAGES[projectSlug as keyof typeof PROJECT_IMAGES];
      if (projectImages) {
        imagePreloader.preloadMultiple(projectImages, { priority: 'high' });
      }
    }
  }, [location.pathname]);

  // Preload next likely routes based on current location
  useEffect(() => {
    const preloadNextRoutes = () => {
      const currentPath = location.pathname;
      
      if (currentPath === '/') {
        // From homepage, likely to visit projects or about
        import('@/pages/Projects');
        import('@/pages/About');
      } else if (currentPath === '/projects') {
        // From projects, likely to visit specific project
        import('@/pages/WelbiltKitchenConnect');
        import('@/pages/PGDataloggerProject');
      }
    };

    // Delay preloading to not block initial render
    const timeoutId = setTimeout(preloadNextRoutes, 1000);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
};
