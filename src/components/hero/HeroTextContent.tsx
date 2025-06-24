import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Linkedin } from 'lucide-react';
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
  const linkedInUrl = "https://www.linkedin.com/in/your-profile";
  return <motion.div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left" initial={{
    opacity: 0,
    x: -50
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }}>
      <motion.h1 initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2,
      duration: 0.6
    }} className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-bengali-dark mb-4 md:mb-6">
        <motion.span initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} data-lovable-editable="hero-greeting" className="relative inline-block py-0 my-[20px] text-yellow-400 text-3xl">
          Hi
          <motion.span className="absolute -bottom-1 left-0 h-1 bg-bengali-mustard" initial={{
          width: 0
        }} animate={{
          width: "100%"
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }} />
        </motion.span>
        <br />
        <motion.span initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.7
      }} data-lovable-editable="hero-intro" className="text-amber-600 text-lg">
          I am
        </motion.span>
        <br />
        <span className="relative inline-block text-5xl sm:text-6xl lg:text-7xl py-0 my-[16px]">
          <motion.span initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.0
        }} className="text-bengali-terracotta-dark dark:text-red-500" data-lovable-editable="hero-name">
            {displayText}
            <motion.span className="inline-block w-1 h-16 sm:h-20 bg-bengali-terracotta-dark dark:bg-red-500 ml-1" animate={{
            opacity: [1, 0, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity
          }} />
          </motion.span>
          <motion.span className="absolute -bottom-1 left-0 h-1 bg-bengali-terracotta-dark dark:bg-red-500" initial={{
          width: 0
        }} animate={{
          width: currentIndex === fullText.length ? "100%" : "0%"
        }} transition={{
          delay: 1.4,
          duration: 0.8
        }} />
        </span>
      </motion.h1>
      
      <motion.div className="mb-6 md:mb-8" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.6,
      duration: 0.6
    }}>
        <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg">
          <p className="text-base md:text-lg max-w-md text-black" data-lovable-editable="hero-description">Sr. UX Designer &amp; Researcher with 5 years of designing intuitive digital and tangible solutions and a Masters in Design from Indian Institute of Science (IISc). 
My approach is rooted in Empathy, Clarity and alignment with Business Goals - delivering scalable Future-ready solutions.</p>
        </div>
      </motion.div>
      
      <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start" initial={{
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
          <Button onClick={scrollToProjects} className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white font-semibold px-6 py-3 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transform transition-all duration-300 dark:bg-bengali-terracotta dark:hover:bg-bengali-terracotta/90 dark:border-white" data-lovable-editable="hero-cta-button">
            View My Work
          </Button>
        </motion.div>

        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button variant="outline" size="icon" className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-white shadow-md hover:shadow-lg transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:border-white h-12 w-12" asChild>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>;
};
export default HeroTextContent;