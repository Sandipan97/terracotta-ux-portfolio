
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import NavigationLinks from './NavigationLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onToggle, onClose }: MobileMenuProps) => {
  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Mobile menu button clicked, isOpen:', isOpen);
    onToggle();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Overlay clicked, closing menu');
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Mobile Menu Button - now shows up to lg breakpoint */}
      <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
        <div className="scale-75 sm:scale-90 md:scale-100">
          <ThemeToggle />
        </div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggleClick}
            data-mobile-menu-button="true"
            className="text-bengali-dark hover:bg-bengali-terracotta/10 dark:text-foreground dark:hover:bg-bengali-terracotta/20 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 relative z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation Overlay - improved tablet styling */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ touchAction: 'auto' }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            />
            
            <motion.div 
              className="absolute top-16 sm:top-20 md:top-24 right-2 left-2 sm:right-4 sm:left-4 md:right-6 md:left-6 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border overflow-hidden dark:bg-card/95 max-h-[calc(100vh-5rem)] overflow-y-auto z-[110]"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              style={{ touchAction: 'auto' }}
              onClick={handleContentClick}
              data-mobile-menu-content="true"
            >
              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                <NavigationLinks onLinkClick={onClose} isMobile={true} />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className="bg-bengali-red hover:bg-bengali-terracotta text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-bengali-red-light dark:hover:bg-bengali-red text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4"
                    data-lovable-editable="mobile-resume-button"
                    onClick={onClose}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
