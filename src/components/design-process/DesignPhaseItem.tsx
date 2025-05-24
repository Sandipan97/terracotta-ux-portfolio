
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
  const circleSize = size === 'large' ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24';
  const iconSize = size === 'large' ? 'w-12 h-12 md:w-14 md:h-14' : 'w-10 h-10 md:w-12 md:h-12';

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      variants={phaseVariants}
      whileHover="hover"
    >
      {/* Phase Circle */}
      <motion.div
        className={`${circleSize} ${phase.color} rounded-full flex items-center justify-center shadow-lg relative overflow-hidden`}
        variants={iconVariants}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Illustration Container */}
        <div className={`${iconSize} relative z-10`}>
          {phase.illustration}
        </div>
        
        {/* Subtle animated background */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
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

      {/* Phase Label */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-semibold text-sm md:text-base text-bengali-dark mb-1">
          {phase.label}
        </h3>
        <p className="text-xs md:text-sm text-bengali-dark/70 max-w-[80px] md:max-w-[100px]">
          {phase.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DesignPhaseItem;
