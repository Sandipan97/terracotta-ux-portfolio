
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroBackground = () => {
  const controls = useAnimation();

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

  return (
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
  );
};

export default HeroBackground;
