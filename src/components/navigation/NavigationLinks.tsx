
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavigationLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

const NavigationLinks = ({ onLinkClick, isMobile = false }: NavigationLinksProps) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
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
    onLinkClick?.();
  };

  const linkClassName = isMobile 
    ? "block w-full text-left text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium py-3 border-b border-gray-100"
    : "text-bengali-dark hover:text-bengali-terracotta transition-colors font-medium";

  const motionProps = isMobile 
    ? { whileHover: { x: 5 }, whileTap: { scale: 0.98 } }
    : { whileHover: { y: -2 }, whileTap: { scale: 0.95 } };

  return (
    <>
      <motion.button 
        onClick={() => scrollToSection('hero')}
        className={linkClassName}
        {...motionProps}
      >
        Home
      </motion.button>
      
      <Link 
        to="/about" 
        className={linkClassName}
        onClick={onLinkClick}
      >
        <motion.span {...motionProps}>
          About
        </motion.span>
      </Link>
      
      <Link 
        to="/projects" 
        className={linkClassName}
        onClick={onLinkClick}
      >
        <motion.span {...motionProps}>
          Projects
        </motion.span>
      </Link>
      
      <Link 
        to="/contact" 
        className={linkClassName}
        onClick={onLinkClick}
      >
        <motion.span {...motionProps}>
          Contact
        </motion.span>
      </Link>
    </>
  );
};

export default NavigationLinks;
