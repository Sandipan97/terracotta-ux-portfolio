
import { motion } from 'framer-motion';
import { designPhases } from '@/data/designPhases';
import DesignPhaseItem from './DesignPhaseItem';

interface MobileLayoutProps {
  isInView: boolean;
  containerVariants: any;
  phaseVariants: any;
  iconVariants: any;
  arrowVariants: any;
  onPhaseClick?: (backgroundTheme: string) => void;
  activePhaseId?: number | null;
}

const MobileLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants,
  onPhaseClick,
  activePhaseId
}: MobileLayoutProps) => {
  return (
    <div className="md:hidden px-2">
      <motion.div 
        className="grid grid-cols-2 gap-3 sm:gap-4 gap-y-8 sm:gap-y-10 max-w-xs sm:max-w-md mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {designPhases.map((phase) => (
          <div key={phase.id} className="relative flex justify-center">
            <DesignPhaseItem 
              phase={phase}
              phaseVariants={phaseVariants}
              iconVariants={iconVariants}
              size="large"
              onClick={() => onPhaseClick?.(phase.backgroundTheme)}
              isActive={activePhaseId === phase.id}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileLayout;
