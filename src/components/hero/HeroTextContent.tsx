
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Linkedin } from 'lucide-react';
import ExecutiveSummaryCard from './ExecutiveSummaryCard';

const HeroTextContent = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Sandipan';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // LinkedIn profile URL - easily editable
  const linkedInUrl = "https://www.linkedin.com/in/sandipan-naskar-129a88155/";

  return (
    <motion.div 
      className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full h-full pr-0 md:pr-6 xl:pr-8 mt-6 md:mt-0" 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Restructured Hero Text Container */}
      <motion.div
        className="w-full mb-6 md:mb-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Greeting Section */}
        <motion.div 
          className="relative mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
        >
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            {/* "Hi," */}
            <motion.span 
              className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-warm-rust leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              data-lovable-editable="hero-greeting"
            >
              <span className="relative inline-block">
                Hi,
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 md:h-1 bg-warm-golden rounded-full" 
                  initial={{ width: 0, opacity: 0 }} 
                  animate={{ width: "100%", opacity: 1 }} 
                  transition={{ delay: 1.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </span>
            </motion.span>
            
            {/* "I am" */}
            <motion.span 
              className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-warm-rust leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              I am
            </motion.span>
          </div>
        </motion.div>

        {/* Name Section */}
        <motion.div
          className="relative mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1.0, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h1 className="font-display font-bold text-warm-terracotta dark:text-warm-terracotta leading-tight">
            {/* Responsive Typography with clamp() - Adjusted for better mobile scaling */}
            <span 
              className="block relative"
              style={{ 
                fontSize: 'clamp(1.75rem, 7vw, 6rem)', 
                lineHeight: 'clamp(2rem, 7.5vw, 6.6rem)' 
              }}
              data-lovable-editable="hero-name"
            >
              <span className="relative inline-block">
                {displayText}
                <motion.span 
                  className="inline-block w-1 bg-warm-terracotta dark:bg-warm-terracotta ml-2" 
                  style={{ height: 'clamp(1.75rem, 7vw, 6rem)' }}
                  animate={{ 
                    opacity: [1, 0, 1], 
                    scaleY: [1, 0.8, 1]
                  }} 
                  transition={{ 
                    duration: 1.2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </span>
              
              {/* Enhanced Underline Animation */}
              <motion.span 
                className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-warm-terracotta to-warm-golden rounded-full" 
                initial={{ width: 0, opacity: 0 }} 
                animate={{ 
                  width: currentIndex === fullText.length ? "100%" : "0%",
                  opacity: currentIndex === fullText.length ? 1 : 0
                }} 
                transition={{ delay: 1.4, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              
              {/* Subtle Glow Effect */}
              <motion.div
                className="absolute inset-0 -z-10 blur-2xl opacity-20 bg-warm-terracotta rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: currentIndex === fullText.length ? 1.2 : 0,
                  opacity: currentIndex === fullText.length ? 0.2 : 0
                }}
                transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
              />
            </span>
          </h1>
        </motion.div>
      </motion.div>
      
      <ExecutiveSummaryCard />
      
      {/* Action Buttons */}
      <motion.div 
        className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start w-full mt-6" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={scrollToProjects} 
            size="default" 
            className="shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2 md:py-3" 
            data-lovable-editable="hero-cta-button"
          >
            View Portfolio
          </Button>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="secondary" 
            size="default" 
            className="shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
          >
            Schedule Consultation
          </Button>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="icon" 
            className="shadow-md hover:shadow-lg transition-all duration-300 h-10 w-10 md:h-12 md:w-12" 
            asChild
          >
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={18} className="md:w-5 md:h-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroTextContent;
