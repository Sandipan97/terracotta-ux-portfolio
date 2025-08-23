
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { optimizedImagePreloader } from '@/services/optimizedImagePreloader';

export const useOptimizedImageLoading = () => {
  const location = useLocation();

  useEffect(() => {
    // Immediate route-specific preloading
    optimizedImagePreloader.preloadForRoute(location.pathname);

    // Predictive preloading for likely next routes
    const preloadNextRoutes = () => {
      const currentPath = location.pathname;
      
      if (currentPath === '/') {
        // Preload project page components
        import('@/pages/Projects');
        import('@/pages/WelbiltKitchenConnect');
        import('@/pages/PGDataloggerProject');
      } else if (currentPath === '/projects') {
        // Preload top project pages
        import('@/pages/WelbiltKitchenConnect');
        import('@/pages/PGDataloggerProject');
      } else if (currentPath.startsWith('/projects/')) {
        // Preload other projects and main pages
        import('@/pages/Projects');
        import('@/pages/About');
      }
    };

    // Delay predictive preloading to not block initial render
    const timeoutId = setTimeout(preloadNextRoutes, 500);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Preload fonts and critical resources
  useEffect(() => {
    if ('fonts' in document) {
      document.fonts.load('1em Inter');
      document.fonts.load('1em "Playfair Display"');
    }
  }, []);
};
