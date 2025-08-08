
import { motion } from 'framer-motion';

const PrototypeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/40" />
      
      {/* Prototype-themed floating elements - hidden on mobile */}
      <div className="hidden sm:block">
        <motion.div 
          className="absolute top-12 left-14 text-6xl opacity-25"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔧
        </motion.div>
        
        <motion.div 
          className="absolute top-24 right-12 text-5xl opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, -5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ⚙️
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-16 text-4xl opacity-30"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🛠️
        </motion.div>
        
        <motion.div 
          className="absolute bottom-28 right-18 text-5xl opacity-25"
          animate={{
            y: [0, 18, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          🎯
        </motion.div>
      </div>

      {/* Animated shapes - scaled for mobile */}
      <motion.div 
        className="absolute top-1/4 right-1/3 w-36 h-36 sm:w-64 sm:h-64 rounded-full bg-purple-200/30 dark:bg-purple-800/20 filter blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-28 h-28 sm:w-48 sm:h-48 rounded-full bg-pink-200/40 dark:bg-pink-700/30 filter blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />
    </div>
  );
};

export default PrototypeBackground;
