
import { motion } from 'framer-motion';

const ResearchBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated magnifying glasses */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full border-4 border-bengali-terracotta rounded-full"></div>
        <div className="w-1 h-8 bg-bengali-terracotta transform rotate-45 absolute -bottom-2 -right-2"></div>
      </motion.div>

      {/* Floating documents */}
      <motion.div
        className="absolute top-40 right-20 w-12 h-16 bg-bengali-mustard/30 rounded opacity-30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Research dots pattern */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-bengali-terracotta/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default ResearchBackground;
