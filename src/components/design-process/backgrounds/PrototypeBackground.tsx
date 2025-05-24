
import { motion } from 'framer-motion';

const PrototypeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated wireframe elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-12 border-2 border-bengali-terracotta/30 rounded opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-40 right-24 w-12 h-8 border-2 border-bengali-mustard/30 rounded opacity-30"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      {/* Building blocks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-bengali-terracotta/20 rounded"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Code-like elements */}
      <motion.div
        className="absolute bottom-20 left-16 text-bengali-terracotta/30 font-mono text-sm opacity-50"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        &lt;/&gt;
      </motion.div>
    </div>
  );
};

export default PrototypeBackground;
