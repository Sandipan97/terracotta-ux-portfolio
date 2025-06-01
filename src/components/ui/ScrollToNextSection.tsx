
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ScrollToNextSectionProps {
  targetId: string;
  className?: string;
}

const ScrollToNextSection = ({ targetId, className = "" }: ScrollToNextSectionProps) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className={`flex justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.button 
        onClick={scrollToSection}
        className="text-white bg-bengali-dark/20 backdrop-blur-sm p-3 rounded-full hover:bg-bengali-dark/30 transition-colors" 
        aria-label={`Scroll to ${targetId}`}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </motion.div>
  );
};

export default ScrollToNextSection;
