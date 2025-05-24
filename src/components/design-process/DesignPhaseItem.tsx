
import { motion } from 'framer-motion';
import { DesignPhase } from '@/data/designPhases';

interface DesignPhaseItemProps {
  phase: DesignPhase;
  phaseVariants: any;
  iconVariants: any;
  size?: 'normal' | 'large';
}

const DesignPhaseItem = ({ 
  phase, 
  phaseVariants, 
  iconVariants, 
  size = 'normal' 
}: DesignPhaseItemProps) => {
  const circleSize = size === 'large' ? 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' : 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24';
  const iconSize = size === 'large' ? 'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12';

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer w-full"
      variants={phaseVariants}
      whileHover="hover"
    >
      {/* Phase Circle with improved dark mode support */}
      <motion.div
        className={`${circleSize} ${phase.color} rounded-full flex items-center justify-center shadow-lg relative overflow-hidden border-2 border-white/20 dark:border-white/10`}
        variants={iconVariants}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Illustration Container */}
        <div className={`${iconSize} relative z-10`}>
          {phase.illustration}
        </div>
        
        {/* Enhanced animated background */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-full dark:bg-white/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Phase Label with improved typography */}
      <motion.div
        className="mt-3 sm:mt-4 lg:mt-6 text-center px-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-semibold text-xs sm:text-sm lg:text-base text-foreground mb-1 sm:mb-2 leading-tight">
          {phase.label}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-[100px] sm:max-w-[120px] lg:max-w-[140px] leading-relaxed">
          {phase.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DesignPhaseItem;
