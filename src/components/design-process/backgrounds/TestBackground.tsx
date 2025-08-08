
import { motion } from 'framer-motion';

const TestBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/40" />
      
      {/* Testing-themed floating elements - hidden on mobile */}
      <div className="hidden sm:block">
        <motion.div 
          className="absolute top-16 left-12 text-6xl opacity-25"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🧪
        </motion.div>
        
        <motion.div 
          className="absolute top-20 right-16 text-5xl opacity-20"
          animate={{
            y: [0, 22, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        >
          ✅
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 left-18 text-4xl opacity-30"
          animate={{
            y: [0, -14, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          📋
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 right-14 text-5xl opacity-25"
          animate={{
            y: [0, 16, 0],
            rotate: [0, -4, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        >
          🔍
        </motion.div>
      </div>

      {/* Animated background shapes - mobile responsive */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-green-200/30 dark:bg-green-800/20 filter blur-xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-56 sm:h-56 rounded-full bg-emerald-200/40 dark:bg-emerald-700/30 filter blur-2xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

export default TestBackground;
