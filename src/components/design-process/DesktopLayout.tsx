
import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import DesignPhaseItem from './DesignPhaseItem';
import VectorLines from './VectorLines';

interface DesktopLayoutProps {
  isInView: boolean;
  containerVariants: any;
  phaseVariants: any;
  iconVariants: any;
  arrowVariants: any;
}

const DesktopLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants 
}: DesktopLayoutProps) => {
  return (
    <div className="hidden md:block">
      <motion.div 
        className="flex items-start justify-center gap-2 lg:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase, index) => (
          <div key={phase.id} className="flex items-start relative">
            <div className="flex flex-col items-center">
              <DesignPhaseItem 
                phase={phase}
                phaseVariants={phaseVariants}
                iconVariants={iconVariants}
                size="large"
              />
            </div>

            <VectorLines 
              phaseIndex={index}
              totalPhases={designPhases.length}
              isDesktop={true}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DesktopLayout;
