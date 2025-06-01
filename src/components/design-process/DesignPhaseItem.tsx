
import { motion } from 'framer-motion';
import { DesignPhase } from '@/data/designPhases';

interface DesignPhaseItemProps {
  phase: DesignPhase;
  phaseVariants: any;
  iconVariants: any;
  size?: 'normal' | 'large';
  onClick?: () => void;
  isActive?: boolean;
}

const DesignPhaseItem = ({ 
  phase, 
  phaseVariants, 
  iconVariants, 
  size = 'normal',
  onClick,
  isActive = false
}: DesignPhaseItemProps) => {
  const circleSize = size === 'large' ? 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24';
  const iconSize = size === 'large' ? 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16' : 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14';

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer w-full relative"
      variants={phaseVariants}
      whileHover="hover"
      onClick={onClick}
      animate={isActive ? "hover" : "rest"}
    >
      {/* Phase Number - Now outlined */}
      <motion.div
        className="absolute -top-2 -left-2 w-6 h-6 border-2 border-bengali-terracotta bg-background text-bengali-terracotta rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-lg"
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
        animate={isActive ? {
          scale: 1.15,
          boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.2)",
        } : {
          scale: 1,
          boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2)",
        }}
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
        className="mt-2 sm:mt-3 lg:mt-4 text-center px-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-foreground mb-1 leading-tight">
          {phase.label}
        </h3>
        <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground max-w-[90px] sm:max-w-[110px] lg:max-w-[130px] leading-relaxed">
          {phase.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DesignPhaseItem;
