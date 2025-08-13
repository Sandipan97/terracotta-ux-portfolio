
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { imagePreloader } from '@/services/imagePreloader';

export const useRoutePreloader = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload images for current route with enhanced strategy
    imagePreloader.preloadForRoute(location.pathname);
  }, [location.pathname]);

  // Preload next likely routes based on current location
  useEffect(() => {
    const preloadNextRoutes = () => {
      const currentPath = location.pathname;
      
      if (currentPath === '/') {
        // From homepage, likely to visit projects or about
        import('@/pages/Projects');
        import('@/pages/About');
        
        // Preload key project page components
        import('@/pages/WelbiltKitchenConnect');
        import('@/pages/PGDataloggerProject');
        import('@/pages/O2CProject');
        
      } else if (currentPath === '/projects') {
        // From projects, likely to visit specific projects
        import('@/pages/WelbiltKitchenConnect');
        import('@/pages/PGDataloggerProject');
        import('@/pages/O2CProject');
        import('@/pages/DripometerProject');
        import('@/pages/FarmMonitoringProject');
        import('@/pages/ToyAnatomyProject');
        import('@/pages/CyclopsARManual');
        
      } else if (currentPath === '/projects/welbilt-kitchen-connect') {
        // Welbilt page: preload the two hero images that are failing
        const welbiltHeroImages = [
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ];
        
        // Use timeout to avoid blocking initial render
        setTimeout(() => {
          welbiltHeroImages.forEach((src, index) => {
            // Direct image preloading without the service to avoid CORS issues
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.referrerPolicy = 'no-referrer';
            img.src = src;
          });
        }, 100);
        
      } else if (currentPath.startsWith('/projects/')) {
        // From project page, likely to visit other projects or contact
        import('@/pages/Projects');
        import('@/pages/Contact');
      }
    };

    // Delay preloading to not block initial render
    const timeoutId = setTimeout(preloadNextRoutes, 1000);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Prefetch critical resources on app start
  useEffect(() => {
    // Prefetch fonts
    if ('fonts' in document) {
      document.fonts.load('1em Inter');
      document.fonts.load('1em "Playfair Display"');
    }
  }, []);
};
