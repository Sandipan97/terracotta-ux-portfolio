
import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import DesignPhaseItem from './DesignPhaseItem';
import VectorLines from './VectorLines';

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
  iconVariants 
}: MobileLayoutProps) => {
  return (
    <div className="md:hidden">
      <motion.div 
        className="grid grid-cols-2 gap-8 max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase, index) => (
          <div key={phase.id} className="relative flex justify-center">
            <DesignPhaseItem 
              phase={phase}
              phaseVariants={phaseVariants}
              iconVariants={iconVariants}
              size="large"
            />
            
            <VectorLines 
              phaseIndex={index}
              totalPhases={designPhases.length}
              isDesktop={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileLayout;
