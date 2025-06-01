
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-background">
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bengali-mustard/10 filter blur-3xl" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }} 
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }} 
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bengali-terracotta/10 filter blur-3xl" 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }} 
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }} 
      />
    </div>
  );
};

export default AnimatedBackground;
