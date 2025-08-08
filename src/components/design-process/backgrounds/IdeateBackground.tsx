
import { motion } from 'framer-motion';

const IdeateBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950/30 dark:to-orange-950/40" />
      
      {/* Creative floating elements - hidden on mobile */}
      <div className="hidden sm:block">
        <motion.div 
          className="absolute top-16 left-12 text-6xl opacity-25"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💡
        </motion.div>
        
        <motion.div 
          className="absolute top-20 right-16 text-5xl opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          🎨
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 left-20 text-4xl opacity-30"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ⚡
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-14 text-5xl opacity-25"
          animate={{
            y: [0, 18, 0],
            x: [0, -8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        >
          🚀
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-8 text-3xl opacity-15"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          ✨
        </motion.div>
      </div>

      {/* Animated background shapes - scaled down on mobile */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-yellow-200/30 dark:bg-yellow-800/20 filter blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-56 sm:h-56 rounded-full bg-orange-200/40 dark:bg-orange-700/30 filter blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default IdeateBackground;
