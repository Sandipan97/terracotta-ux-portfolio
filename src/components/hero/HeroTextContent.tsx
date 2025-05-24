import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
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
        <motion.span className="relative inline-block py-0 my-[20px]" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }}>
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
      }}>
          I am
        </motion.span>
        <br />
        <span className="relative inline-block text-5xl sm:text-6xl lg:text-7xl py-0 my-[16px]">
          <motion.span className="text-bengali-terracotta" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.0
        }}>
            {displayText}
            <motion.span className="inline-block w-1 h-16 sm:h-20 bg-bengali-terracotta ml-1" animate={{
            opacity: [1, 0, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity
          }} />
          </motion.span>
          <motion.span className="absolute -bottom-1 left-0 h-1 bg-bengali-terracotta" initial={{
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
          <p className="text-base md:text-lg text-bengali-dark/90 max-w-md">
            Senior UX Designer & Researcher with 5 years of experience and a Masters in Design from IISc
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
          <Button onClick={scrollToProjects} className="transition-all duration-300 shadow-lg hover:shadow-xl text-rose-600 text-xl bg-yellow-400 hover:bg-yellow-300">
            View My Work
          </Button>
        </motion.div>
        <motion.div whileHover={{
        scale: 1.05,
        y: -2
      }} whileTap={{
        scale: 0.95
      }}>
          <Button variant="outline" className="border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>;
};
export default HeroTextContent;