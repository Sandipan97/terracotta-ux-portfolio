
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

    // Optimize font loading
    if ('fonts' in document) {
      document.fonts.load('1em Inter');
      document.fonts.load('1em "Playfair Display"');
    }

    // Prefetch DNS for external resources
    const prefetchDNS = () => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = '//fonts.googleapis.com';
      document.head.appendChild(link);

      const link2 = document.createElement('link');
      link2.rel = 'dns-prefetch';
      link2.href = '//images.unsplash.com';
      document.head.appendChild(link2);
    };

    prefetchDNS();

    // Reduce motion for users with motion sensitivity
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

  }, []);
};
