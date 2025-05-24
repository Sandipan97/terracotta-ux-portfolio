
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, #FFD700, #E31A1C)',
        'linear-gradient(135deg, #E31A1C, #FFD700)',
        'linear-gradient(225deg, #FFD700, #D73027)',
        'linear-gradient(315deg, #D73027, #E31A1C)',
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }, [controls]);

  return (
    <div className="absolute inset-0 z-0">
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[35%] rounded-t-[50%] transform translate-y-1/4 opacity-95 dark:opacity-85"
        animate={controls}
      />
      
      <motion.div 
        className="absolute top-[20%] left-[10%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-bengali-mustard/50 filter blur-2xl dark:bg-bengali-mustard/40"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-[40%] right-[15%] w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-bengali-terracotta/35 filter blur-2xl dark:bg-bengali-terracotta/30"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-[60%] left-[70%] w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-bengali-red/40 filter blur-xl dark:bg-bengali-red/30"
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default HeroBackground;
