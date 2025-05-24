
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const scrollToSection = (sectionId: string) => {
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="font-display text-2xl font-bold text-bengali-dark">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Sandipan's Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={() => scrollToSection('hero')}
              className="text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <Link to="/about" className="text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium">
              <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                About
              </motion.span>
            </Link>
            <Link to="/projects" className="text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium">
              <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                Projects
              </motion.span>
            </Link>
            <Link to="/contact" className="text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium">
              <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                Contact
              </motion.span>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-bengali-red hover:bg-bengali-terracotta text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-bengali-dark hover:bg-bengali-terracotta/10"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="absolute top-16 right-4 left-4 bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 space-y-6">
                <motion.button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium py-3 border-b border-gray-100"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Home
                </motion.button>
                <Link 
                  to="/about" 
                  className="block text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium py-3 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                    About
                  </motion.span>
                </Link>
                <Link 
                  to="/projects" 
                  className="block text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium py-3 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                    Projects
                  </motion.span>
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium py-3 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                    Contact
                  </motion.span>
                </Link>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-bengali-red hover:bg-bengali-terracotta text-white w-full shadow-lg hover:shadow-xl transition-all duration-300">
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

export default Navbar;
