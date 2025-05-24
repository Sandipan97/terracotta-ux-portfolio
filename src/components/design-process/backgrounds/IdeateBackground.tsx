
import { motion } from 'framer-motion';

const IdeateBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated light bulbs */}
      <motion.div
        className="absolute top-20 left-20 text-5xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💡
      </motion.div>

      <motion.div
        className="absolute top-40 right-16 text-3xl opacity-25"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        💡
      </motion.div>

      {/* Creative sparks */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-bengali-terracotta/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Floating idea clouds */}
      <motion.div
        className="absolute top-60 left-40 w-20 h-12 bg-bengali-mustard/20 rounded-full opacity-40"
        animate={{
          x: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default IdeateBackground;
