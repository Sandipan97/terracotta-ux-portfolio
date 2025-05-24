
import { motion } from 'framer-motion';

const IdeateBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced animated light bulbs */}
      <motion.div
        className="absolute top-20 left-20 text-6xl opacity-30 blur-sm"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💡
      </motion.div>

      <motion.div
        className="absolute top-40 right-16 text-4xl opacity-25 blur-sm"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        💡
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-5xl opacity-20 blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 20, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      >
        💡
      </motion.div>

      {/* Enhanced creative sparks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/40 dark:bg-blue-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 3, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
        />
      ))}

      {/* Floating idea clouds with better colors */}
      <motion.div
        className="absolute top-60 left-40 w-24 h-16 bg-blue-400/20 dark:bg-blue-300/30 rounded-full opacity-40"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-40 right-32 w-20 h-12 bg-blue-300/25 dark:bg-blue-200/35 rounded-full opacity-35"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Brain/thinking elements */}
      <motion.div
        className="absolute top-32 right-32 text-3xl opacity-25 blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🧠
      </motion.div>
    </div>
  );
};

export default IdeateBackground;
