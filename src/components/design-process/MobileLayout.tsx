
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
}

const MobileLayout = ({ 
  isInView, 
  containerVariants, 
  phaseVariants, 
  iconVariants,
  onPhaseClick
}: MobileLayoutProps) => {
  return (
    <div className="md:hidden">
      <motion.div 
        className="grid grid-cols-2 gap-8 sm:gap-10 gap-y-20 sm:gap-y-24 max-w-sm sm:max-w-md mx-auto relative px-4"
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
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileLayout;
