
import { motion } from 'framer-motion';

const DeployBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated rockets */}
      <motion.div
        className="absolute top-16 left-16 text-4xl opacity-30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-3xl opacity-25"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        🚀
      </motion.div>

      {/* Launch trails */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-8 bg-gradient-to-t from-bengali-terracotta/40 to-transparent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 40}%`,
          }}
          animate={{
            height: [8, 20, 8],
            opacity: [0.4, 0.8, 0.4],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Success stars */}
      <motion.div
        className="absolute top-32 right-32 text-2xl text-bengali-mustard/40"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-24 text-xl text-bengali-terracotta/40"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        ⭐
      </motion.div>
    </div>
  );
};

export default DeployBackground;
