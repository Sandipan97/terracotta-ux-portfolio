
import { motion } from 'framer-motion';

const TestBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated checkmarks */}
      <motion.div
        className="absolute top-24 left-24 text-4xl text-bengali-terracotta/40"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✓
      </motion.div>

      <motion.div
        className="absolute top-52 right-20 text-3xl text-bengali-mustard/40"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        ✓
      </motion.div>

      {/* Testing elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 border border-bengali-terracotta/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            borderColor: ['rgba(184, 84, 80, 0.3)', 'rgba(249, 211, 66, 0.5)', 'rgba(184, 84, 80, 0.3)']
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Validation symbols */}
      <motion.div
        className="absolute bottom-32 left-32 w-16 h-12 border-2 border-bengali-mustard/30 rounded opacity-40"
        animate={{
          borderWidth: [2, 4, 2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default TestBackground;
