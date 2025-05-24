
import { motion } from 'framer-motion';

const DeployBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced animated rockets */}
      <motion.div
        className="absolute top-16 left-16 text-5xl opacity-35"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-4xl opacity-30"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-24 text-3xl opacity-25"
        animate={{
          y: [0, -35, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 3 }}
      >
        🚀
      </motion.div>

      {/* Enhanced launch trails with green theme */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-10 bg-gradient-to-t from-emerald-500/40 to-transparent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 40}%`,
          }}
          animate={{
            height: [10, 25, 10],
            opacity: [0.4, 0.9, 0.4],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Enhanced success stars with green theme */}
      <motion.div
        className="absolute top-32 right-32 text-3xl text-emerald-400/50"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-24 text-2xl text-green-400/50"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-60 left-60 text-xl text-emerald-300/40"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      >
        ⭐
      </motion.div>

      {/* Deployment success indicators */}
      <motion.div
        className="absolute bottom-20 right-16 text-emerald-400/30 font-mono text-lg opacity-60"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✓
      </motion.div>
    </div>
  );
};

export default DeployBackground;
