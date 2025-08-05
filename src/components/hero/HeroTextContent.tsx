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
    }} className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-warm-clay mb-4 md:mb-6 px-0 py-0 my-0">
        <motion.span initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} data-lovable-editable="hero-greeting" className="relative inline-block py-0 mb-3 text-3xl text-warm-rust leading-tight">
          <span className="relative inline-block mb-1">
            Hi,
            <motion.span className="absolute -bottom-1 left-0 h-1 bg-warm-golden" initial={{
            width: 0
          }} animate={{
            width: "100%"
          }} transition={{
            delay: 1.2,
            duration: 0.8
          }} />
          </span>
          <br />
          <span className="mt-1">I am</span>
        </motion.span>
        
        <span className="relative inline-block text-5xl sm:text-6xl lg:text-7xl py-0 mt-2">
          <motion.span initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.0
        }} className="text-warm-terracotta dark:text-warm-terracotta" data-lovable-editable="hero-name">
            {displayText}
            <motion.span className="inline-block w-1 h-16 sm:h-20 bg-warm-terracotta dark:bg-warm-terracotta ml-1" animate={{
            opacity: [1, 0, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity
          }} />
          </motion.span>
          <motion.span className="absolute -bottom-1 left-0 h-1 bg-warm-terracotta dark:bg-warm-terracotta" initial={{
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
        <div className="bg-white/95 backdrop-blur-md border border-warm-terracotta/20 rounded-xl p-6 shadow-xl">
          <p className="text-base md:text-lg max-w-md text-warm-clay font-medium leading-relaxed" data-lovable-editable="hero-description">
            Sr. UX Designer &amp; Product Manager with 5+ years of designing intuitive digital and tangible solutions. 
            Masters in Design from Indian Institute of Science (IISc).
          </p>
          <p className="text-sm text-warm-clay/70 mt-3 max-w-md">
            My approach is rooted in <span className="font-semibold text-warm-terracotta">Empathy</span>, 
            <span className="font-semibold text-warm-rust"> Clarity</span> and 
            <span className="font-semibold text-warm-golden"> Business Alignment</span> - delivering scalable, future-ready solutions.
          </p>
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
          <Button onClick={scrollToProjects} size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" data-lovable-editable="hero-cta-button">
            View Portfolio
          </Button>
        </motion.div>

        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
            Schedule Consultation
          </Button>
        </motion.div>

        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button variant="outline" size="icon" className="shadow-md hover:shadow-lg transition-all duration-300 h-12 w-12" asChild>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>;
};

export default HeroTextContent;
