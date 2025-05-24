
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, #FFD93D, #B85450)',
        'linear-gradient(135deg, #B85450, #FFD93D)',
        'linear-gradient(225deg, #FFD93D, #C53030)',
        'linear-gradient(315deg, #C53030, #B85450)',
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
        className="absolute bottom-0 left-0 right-0 h-[35%] rounded-t-[50%] transform translate-y-1/4 opacity-90 dark:opacity-70"
        animate={controls}
      />
      
      <motion.div 
        className="absolute top-[20%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-bengali-mustard/30 filter blur-xl dark:bg-bengali-mustard/20"
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
        className="absolute bottom-[40%] right-[15%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-bengali-terracotta/20 filter blur-xl dark:bg-bengali-terracotta/15"
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
  );
};

export default HeroBackground;
