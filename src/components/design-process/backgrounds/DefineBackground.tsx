
import { motion } from 'framer-motion';

const DefineBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated pencils */}
      <motion.div
        className="absolute top-16 left-16 w-1 h-20 bg-bengali-mustard/40 rounded-full opacity-30"
        animate={{
          rotate: [0, 20, -10, 0],
          x: [0, 10, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Definition symbols */}
      <motion.div
        className="absolute top-32 right-32 text-4xl text-bengali-mustard/30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✏️
      </motion.div>

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border-2 border-bengali-mustard/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            borderRadius: i % 2 === 0 ? '50%' : '0'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export default DefineBackground;
