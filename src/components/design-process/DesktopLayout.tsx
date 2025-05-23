
import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import DesignPhaseItem from './DesignPhaseItem';
import ProcessArrow from './ProcessArrow';

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
  iconVariants, 
  arrowVariants 
}: DesktopLayoutProps) => {
  return (
    <div className="hidden md:block">
      <motion.div 
        className="flex items-start justify-center gap-4 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase, index) => (
          <div key={phase.id} className="flex items-start">
            <div className="flex flex-col items-center">
              <DesignPhaseItem 
                phase={phase}
                phaseVariants={phaseVariants}
                iconVariants={iconVariants}
              />
            </div>

            {index < designPhases.length - 1 && (
              <div className="flex items-center mt-10">
                <ProcessArrow 
                  arrowVariants={arrowVariants}
                  index={index}
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DesktopLayout;
