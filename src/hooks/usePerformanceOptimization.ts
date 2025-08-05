
import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Add will-change for elements that will animate
    const addWillChange = () => {
      const animatedElements = document.querySelectorAll('[data-animate], .animate-');
      animatedElements.forEach((el) => {
        (el as HTMLElement).style.willChange = 'transform, opacity';
      });
    };

    // Remove will-change after animation completes to free memory
    const removeWillChange = () => {
      const animatedElements = document.querySelectorAll('[data-animate], .animate-');
      animatedElements.forEach((el) => {
        const element = el as HTMLElement;
        element.addEventListener('animationend', () => {
          element.style.willChange = 'auto';
        });
        element.addEventListener('transitionend', () => {
          element.style.willChange = 'auto';
        });
      });
    };

    addWillChange();
    removeWillChange();

    // Enhanced font loading strategy
    if ('fonts' in document) {
      const fontPromises = [
        document.fonts.load('1em Inter'),
        document.fonts.load('1em "Playfair Display"'),
        document.fonts.load('600 1em Inter'), // Bold
        document.fonts.load('500 1em Inter')  // Medium
      ];

      Promise.allSettled(fontPromises).then(() => {
        console.log('Critical fonts loaded');
      });
    }

    // Enhanced DNS prefetching and preconnect
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ];

      hints.forEach(hint => {
        const existing = document.querySelector(`link[href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if ('crossorigin' in hint) {
            link.crossOrigin = hint.crossorigin;
          }
          document.head.appendChild(link);
        }
      });
    };

    addResourceHints();

    // Optimize for reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreference = (mediaQuery: MediaQueryListEvent | MediaQueryList) => {
      if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    handleMotionPreference(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleMotionPreference);

    // Enhanced memory management
    const optimizeMemory = () => {
      // Force garbage collection for unused images (if available)
      if ('gc' in window && typeof window.gc === 'function') {
        setTimeout(() => window.gc(), 30000);
      }
      
      // Clean up unused event listeners periodically
      const unusedElements = document.querySelectorAll('[data-cleanup-ready]');
      unusedElements.forEach(el => el.remove());
    };

    const memoryTimer = setInterval(optimizeMemory, 60000); // Every minute

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionPreference);
      clearInterval(memoryTimer);
    };
  }, []);
};
