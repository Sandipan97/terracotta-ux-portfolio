
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroScrollButton = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.button 
        onClick={scrollToSkills}
        className="text-white bg-bengali-dark/20 backdrop-blur-sm p-3 rounded-full hover:bg-bengali-dark/30 transition-colors" 
        aria-label="Scroll to skills and expertise"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-lovable-editable="hero-scroll-label"
      >
        <ArrowDown size={24} />
      </motion.button>
    </motion.div>
  );
};

export default HeroScrollButton;
