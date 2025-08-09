
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
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        <div className="scale-75 xs:scale-100">
          <ThemeToggle />
        </div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onToggle}
            className="text-bengali-dark hover:bg-bengali-terracotta/10 dark:text-foreground dark:hover:bg-bengali-terracotta/20 h-10 w-10 xs:h-12 xs:w-12"
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
                  <X className="h-5 w-5 xs:h-6 xs:w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 xs:h-6 xs:w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
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
              onClick={onClose}
            />
            
            <motion.div 
              className="absolute top-16 xs:top-20 right-2 left-2 xs:right-4 xs:left-4 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border overflow-hidden dark:bg-card/95 max-h-[calc(100vh-5rem)] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              style={{ touchAction: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 xs:p-6 space-y-4 xs:space-y-6">
                <NavigationLinks onLinkClick={onClose} isMobile={true} />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className="bg-bengali-red hover:bg-bengali-terracotta text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-bengali-red-light dark:hover:bg-bengali-red text-sm xs:text-base py-2 xs:py-3"
                    data-lovable-editable="mobile-resume-button"
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
