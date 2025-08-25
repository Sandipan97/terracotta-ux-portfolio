
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenu from './navigation/MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close if clicking outside the mobile menu area
      const target = event.target as Element;
      const mobileMenuButton = target.closest('[data-mobile-menu-button]');
      const mobileMenuContent = target.closest('[data-mobile-menu-content]');
      
      if (mobileMenuOpen && !mobileMenuButton && !mobileMenuContent) {
        console.log('Closing mobile menu - clicked outside');
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    console.log('Mobile menu toggle clicked, current state:', mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    console.log('Mobile menu close triggered');
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-2 dark:bg-background/95 border-b border-border/20' 
          : 'bg-background/80 backdrop-blur-sm py-4 dark:bg-background/80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 xs:px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-xl xs:text-2xl font-bold text-berkeley-blue dark:text-foreground">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="block truncate max-w-[200px] xs:max-w-none"
          >
            Sandipan's Portfolio
          </motion.span>
        </Link>

        <DesktopNavigation />
        
        <MobileMenu 
          isOpen={mobileMenuOpen}
          onToggle={handleMobileMenuToggle}
          onClose={handleMobileMenuClose}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
