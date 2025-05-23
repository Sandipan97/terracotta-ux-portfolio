
import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import DesignPhaseItem from './DesignPhaseItem';

interface MobileLayoutProps {
  isInView: boolean;
  containerVariants: any;
  phaseVariants: any;
  iconVariants: any;
  arrowVariants: any;
}

const MobileLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants, 
  arrowVariants 
}: MobileLayoutProps) => {
  return (
    <div className="md:hidden">
      <motion.div 
        className="grid grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase, index) => (
          <motion.div
            key={phase.id}
            className="flex flex-col items-center group cursor-pointer"
            variants={phaseVariants}
            whileHover="hover"
            initial="rest"
          >
            <motion.div
              className={`
                w-14 h-14 rounded-full ${phase.color} 
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
              <h3 className="font-heading text-sm font-semibold text-bengali-dark mb-1">
                {phase.label}
              </h3>
              <p className="text-xs text-bengali-dark/60">
                {phase.description}
              </p>
            </motion.div>

            {index < designPhases.length - 1 && index % 2 === 1 && (
              <motion.div
                className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-bengali-terracotta/30"
                variants={arrowVariants}
                style={{ 
                  top: `${Math.floor(index / 2) * 120 + 80}px`
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileLayout;
