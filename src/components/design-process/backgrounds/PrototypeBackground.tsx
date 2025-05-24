
import { motion } from 'framer-motion';

const PrototypeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced prototype building tools */}
      <motion.div
        className="absolute top-20 left-20 text-6xl opacity-30"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🛠️
      </motion.div>

      <motion.div
        className="absolute top-40 right-16 text-4xl opacity-25"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        🛠️
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-5xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 20, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      >
        🛠️
      </motion.div>

      {/* Enhanced building particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/40 dark:bg-indigo-400/50 rounded-full"
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

      {/* Construction and building elements */}
      <motion.div
        className="absolute top-60 left-40 text-3xl opacity-25"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        🔧
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-32 text-4xl opacity-30"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        ⚙️
      </motion.div>

      {/* Innovation elements */}
      <motion.div
        className="absolute top-32 right-32 text-3xl opacity-25"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🔩
      </motion.div>
    </div>
  );
};

export default PrototypeBackground;
