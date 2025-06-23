
import { motion } from 'framer-motion';
import { LavaLamp } from '@/components/ui/fluid-blob';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Fluid blob animation background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <LavaLamp />
      </div>
      
      {/* Bengali color overlay gradients */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-bengali-mustard/20 via-bengali-terracotta/15 to-bengali-red/20 dark:from-bengali-mustard/30 dark:via-bengali-terracotta/25 dark:to-bengali-red/30"
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating colored orbs that complement the fluid background - changed to yellow */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-bengali-mustard/40 filter blur-2xl dark:bg-bengali-mustard/50"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[40%] right-[15%] w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-bengali-mustard/30 filter blur-2xl dark:bg-bengali-mustard/40"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute top-[60%] left-[70%] w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-bengali-mustard/35 filter blur-xl dark:bg-bengali-mustard/45"
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};

export default HeroBackground;
