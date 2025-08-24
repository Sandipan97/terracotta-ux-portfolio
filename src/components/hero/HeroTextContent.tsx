
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
      className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full h-full pr-0 lg:pr-4 xl:pr-6" 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
        className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-warm-clay mb-4 md:mb-6 lg:mb-8 px-0 py-0 my-0 w-full leading-tight"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }} 
          data-lovable-editable="hero-greeting" 
          className="relative inline-block pr-4 lg:pr-8 mb-8 lg:mb-16 text-xl sm:text-2xl lg:text-3xl text-warm-rust leading-relaxed"
        >
          <span className="relative inline-block mb-4 lg:mb-8 py-0 my-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            >
              Hi,
            </motion.span>
            <motion.span 
              className="absolute -bottom-1 lg:-bottom-2 left-0 h-0.5 lg:h-1 bg-warm-golden rounded-full" 
              initial={{ width: 0, opacity: 0 }} 
              animate={{ width: "100%", opacity: 1 }} 
              transition={{ delay: 1.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </span>
          <br />
          <motion.span 
            className="mt-2 block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          >
            I am      
          </motion.span>
        </motion.span>
        
        <span className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl py-0 mt-4 lg:mt-8 leading-tight">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1.1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }} 
            data-lovable-editable="hero-name" 
            className="text-warm-terracotta dark:text-warm-terracotta px-0 mx-0"
          >
            {displayText}
            <motion.span 
              className="inline-block w-0.5 lg:w-1 h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 bg-warm-terracotta dark:bg-warm-terracotta ml-1 lg:ml-2" 
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
          </motion.span>
          <motion.span 
            className="absolute -bottom-1 lg:-bottom-2 left-0 h-1 lg:h-2 bg-warm-terracotta dark:bg-warm-terracotta rounded-full" 
            initial={{ width: 0, opacity: 0 }} 
            animate={{ 
              width: currentIndex === fullText.length ? "100%" : "0%",
              opacity: currentIndex === fullText.length ? 1 : 0
            }} 
            transition={{ delay: 1.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </span>
      </motion.h1>
      
      <ExecutiveSummaryCard />
      
      <motion.div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start w-full mt-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.8,
      duration: 0.6
    }}>
        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button onClick={scrollToProjects} size="default" className="shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2 md:py-3" data-lovable-editable="hero-cta-button">
            View Portfolio
          </Button>
        </motion.div>

        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button variant="secondary" size="default" className="shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            Schedule Consultation
          </Button>
        </motion.div>

        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button variant="outline" size="icon" className="shadow-md hover:shadow-lg transition-all duration-300 h-10 w-10 md:h-12 md:w-12" asChild>
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
