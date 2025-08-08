
import { motion } from 'framer-motion';

const ResearchBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/40" />
      
      {/* Floating research icons - hidden on mobile */}
      <div className="hidden sm:block">
        <motion.div 
          className="absolute top-10 left-10 text-6xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔍
        </motion.div>
        
        <motion.div 
          className="absolute top-32 right-20 text-5xl opacity-15"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          📊
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-16 text-4xl opacity-25"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          📈
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 right-12 text-5xl opacity-20"
          animate={{
            y: [0, 12, 0],
            x: [0, -5, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          💡
        </motion.div>
      </div>

      {/* Subtle animated shapes - scaled down on mobile */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-blue-200/30 dark:bg-blue-800/20 filter blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-24 h-24 sm:w-48 sm:h-48 rounded-full bg-indigo-200/40 dark:bg-indigo-700/30 filter blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

export default ResearchBackground;
