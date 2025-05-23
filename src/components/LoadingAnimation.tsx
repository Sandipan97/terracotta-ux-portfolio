
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8 relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full h-full bg-bengali-terracotta rounded-full flex items-center justify-center"
            animate={{ 
              rotate: [0, 360],
              borderRadius: ["50%", "25%", "50%"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.span
              className="text-white font-bold text-2xl"
              animate={{ rotate: [0, -360] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              S
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-bengali-terracotta to-bengali-mustard rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-bengali-dark text-lg font-medium"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio...
        </motion.p>

        {/* Progress Percentage */}
        <motion.p
          className="text-bengali-terracotta text-sm mt-2"
          key={progress}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
