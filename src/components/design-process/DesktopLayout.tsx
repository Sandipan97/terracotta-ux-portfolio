
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
  activePhaseId?: number | null;
}

const DesktopLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants,
  onPhaseClick,
  activePhaseId
}: DesktopLayoutProps) => {
  return (
    <div className="hidden md:block">
      <motion.div 
        className="flex items-start justify-center gap-x-1 lg:gap-x-2 xl:gap-x-3 max-w-5xl mx-auto px-2 lg:px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase) => (
          <div key={phase.id} className="flex items-start relative flex-1 max-w-[90px] sm:max-w-[110px] lg:max-w-[130px] xl:max-w-[150px]">
            <div className="flex flex-col items-center w-full">
              <DesignPhaseItem 
                phase={phase}
                phaseVariants={phaseVariants}
                iconVariants={iconVariants}
                size="large"
                onClick={() => onPhaseClick?.(phase.backgroundTheme)}
                isActive={activePhaseId === phase.id}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DesktopLayout;
