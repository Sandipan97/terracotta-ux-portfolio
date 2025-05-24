
import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import DesignPhaseItem from './DesignPhaseItem';

interface DesktopLayoutProps {
  isInView: boolean;
  containerVariants: any;
  phaseVariants: any;
  iconVariants: any;
  arrowVariants: any;
  onPhaseClick?: (backgroundTheme: string) => void;
}

const DesktopLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants,
  onPhaseClick
}: DesktopLayoutProps) => {
  return (
    <div className="hidden md:block">
      <motion.div 
        className="flex items-start justify-center gap-x-2 lg:gap-x-3 xl:gap-x-4 max-w-6xl mx-auto px-2 lg:px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase) => (
          <div key={phase.id} className="flex items-start relative flex-1 max-w-[100px] sm:max-w-[120px] lg:max-w-[140px] xl:max-w-[160px]">
            <div className="flex flex-col items-center w-full">
              <DesignPhaseItem 
                phase={phase}
                phaseVariants={phaseVariants}
                iconVariants={iconVariants}
                size="large"
                onClick={() => onPhaseClick?.(phase.backgroundTheme)}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DesktopLayout;
