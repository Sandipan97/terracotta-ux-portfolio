
import { motion } from 'framer-motion';
import { DesignPhase } from '@/data/designPhases';

interface DesignPhaseItemProps {
  phase: DesignPhase;
  phaseVariants: any;
  iconVariants: any;
  size?: 'normal' | 'large';
  onClick?: () => void;
}

const DesignPhaseItem = ({ 
  phase, 
  phaseVariants, 
  iconVariants, 
  size = 'normal',
  onClick 
}: DesignPhaseItemProps) => {
  const circleSize = size === 'large' ? 'w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32' : 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28';
  const iconSize = size === 'large' ? 'w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16';

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer w-full relative"
      variants={phaseVariants}
      whileHover="hover"
      onClick={onClick}
    >
      {/* Phase Number - Now outlined */}
      <motion.div
        className="absolute -top-3 -left-3 w-7 h-7 border-2 border-bengali-terracotta bg-background text-bengali-terracotta rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        {phase.id}
      </motion.div>

      {/* Phase Circle with improved dark mode support */}
      <motion.div
        className={`${circleSize} ${phase.color} rounded-full flex items-center justify-center shadow-xl relative overflow-hidden border-4 border-white/30 dark:border-white/20`}
        variants={iconVariants}
        whileHover={{
          scale: 1.15,
          boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.2)",
        }}
        whileTap={{
          scale: 0.95
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Illustration Container */}
        <div className={`${iconSize} relative z-10`}>
          {phase.illustration}
        </div>
        
        {/* Enhanced animated background */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full dark:bg-white/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 border-2 border-white/50 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Phase Label with improved typography */}
      <motion.div
        className="mt-3 sm:mt-4 lg:mt-5 text-center px-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-foreground mb-1 leading-tight">
          {phase.label}
        </h3>
        <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground max-w-[100px] sm:max-w-[120px] lg:max-w-[140px] leading-relaxed">
          {phase.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DesignPhaseItem;
