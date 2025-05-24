
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { EditableImage } from './ui/editable-image';
import MinimalistAvatar from './ui/minimalist-avatar';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const fullText = 'Sandipan';
  const controls = useAnimation();

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, #F9D342, #802f1f)',
        'linear-gradient(135deg, #802f1f, #F9D342)',
        'linear-gradient(225deg, #F9D342, #A32929)',
        'linear-gradient(315deg, #A32929, #802f1f)',
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }, [controls]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleProfileClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[35%] rounded-t-[50%] transform translate-y-1/4"
          animate={controls}
        />
        
        <motion.div 
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-bengali-mustard/30 filter blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[40%] right-[15%] w-40 h-40 rounded-full bg-bengali-terracotta/20 filter blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <motion.div 
            className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-bengali-dark mb-4 md:mb-6"
            >
              <motion.span 
                className="relative inline-block py-0 my-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hi
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-bengali-mustard"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                I am
              </motion.span>
              <br />
              <span className="relative inline-block text-5xl sm:text-6xl lg:text-7xl py-0 my-[16px]">
                <motion.span
                  className="text-bengali-terracotta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  {displayText}
                  <motion.span
                    className="inline-block w-1 h-16 sm:h-20 bg-bengali-terracotta ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-bengali-terracotta"
                  initial={{ width: 0 }}
                  animate={{ width: currentIndex === fullText.length ? "100%" : "0%" }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg">
                <p className="text-base md:text-lg text-bengali-dark/90 max-w-md">
                  Senior UX Designer & Researcher with 5 years of experience and a Masters in Design from IISc
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
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
                  className="bg-bengali-mustard text-bengali-terracotta hover:bg-bengali-mustard/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" 
                  asChild
                >
                  <a href="/contact">Get In Touch</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer relative"
                onClick={handleProfileClick}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#802f1f",
                  boxShadow: "0 20px 40px -10px rgba(128, 47, 31, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="w-full h-full relative"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front side - Profile Image */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <EditableImage 
                      alt="Senior UX Designer and Researcher" 
                      src="/lovable-uploads/d6f8c20d-1961-4552-a823-c9c0b12a8f05.jpg" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  
                  {/* Back side - Avatar */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-bengali-mustard to-bengali-terracotta p-8"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <MinimalistAvatar />
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 text-bengali-dark px-4 md:px-6 py-2 md:py-3 rounded-full font-medium bg-white backdrop-blur-md border border-white/20 shadow-lg text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                5+ Years Experience
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.button 
            onClick={scrollToProjects}
            className="text-white bg-bengali-dark/20 backdrop-blur-sm p-3 rounded-full hover:bg-bengali-dark/30 transition-colors" 
            aria-label="Scroll to projects"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
