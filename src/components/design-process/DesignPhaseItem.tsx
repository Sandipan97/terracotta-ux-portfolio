
import { motion } from 'framer-motion';
import { DesignPhase } from '@/data/designPhases';

interface DesignPhaseItemProps {
  phase: DesignPhase;
  phaseVariants: any;
  iconVariants: any;
}

const DesignPhaseItem = ({ phase, phaseVariants, iconVariants }: DesignPhaseItemProps) => {
  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      variants={phaseVariants}
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className={`
          w-16 h-16 lg:w-20 lg:h-20 rounded-full ${phase.color} 
          flex items-center justify-center shadow-lg mb-3
          group-hover:shadow-xl transition-shadow duration-300 overflow-hidden
        `}
        variants={iconVariants}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {phase.illustration}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-center"
        variants={iconVariants}
      >
        <h3 className="font-heading text-sm lg:text-base font-semibold text-bengali-dark mb-1">
          {phase.label}
        </h3>
        <p className="text-xs lg:text-sm text-bengali-dark/60">
          {phase.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DesignPhaseItem;
