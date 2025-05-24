
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
        className="flex items-start justify-center gap-x-4 lg:gap-x-8 xl:gap-x-12 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase, index) => (
          <div key={phase.id} className="flex items-start relative flex-1 max-w-[140px] lg:max-w-[160px]">
            <div className="flex flex-col items-center w-full">
              <DesignPhaseItem 
                phase={phase}
                phaseVariants={phaseVariants}
                iconVariants={iconVariants}
                size="large"
              />
            </div>

            {/* Connection lines between phases */}
            {index < designPhases.length - 1 && (
              <VectorLines 
                phaseIndex={index}
                totalPhases={designPhases.length}
                isDesktop={true}
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DesktopLayout;
