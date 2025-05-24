
import { motion } from 'framer-motion';

interface VectorLinesProps {
  phaseIndex: number;
  totalPhases: number;
  isDesktop?: boolean;
}

const VectorLines = ({ phaseIndex, totalPhases, isDesktop = true }: VectorLinesProps) => {
  if (phaseIndex >= totalPhases - 1) return null;

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        pathLength: { duration: 0.8, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  if (isDesktop) {
    // Desktop: horizontal lines between phases
    return (
      <div className="absolute top-12 lg:top-14 left-full transform translate-x-2 lg:translate-x-4 z-10 flex items-center">
        <svg width="32" height="20" viewBox="0 0 32 20" className="lg:w-16 lg:h-20">
          <motion.path
            d="M 0 10 Q 16 5 32 10"
            stroke="url(#line-gradient-desktop)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={lineVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: phaseIndex * 0.3 + 0.5 }}
          />
          <defs>
            <linearGradient id="line-gradient-desktop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B85450" stopOpacity="0.7"/>
              <stop offset="50%" stopColor="#FFD93D" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#B85450" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  } else {
    // Mobile: connection patterns for 2-column grid
    const isLeftColumn = phaseIndex % 2 === 0;
    
    // Horizontal connection (left to right in same row)
    if (isLeftColumn && phaseIndex < totalPhases - 1) {
      return (
        <div className="absolute top-1/2 right-0 transform translate-x-3 sm:translate-x-4 -translate-y-1/2 z-10">
          <svg width="24" height="16" viewBox="0 0 24 16" className="sm:w-32 sm:h-16">
            <motion.path
              d="M 0 8 L 24 8"
              stroke="url(#mobile-line-gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: phaseIndex * 0.3 + 0.5 }}
            />
            <defs>
              <linearGradient id="mobile-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B85450" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#FFD93D" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }
    
    // Vertical connection (right column to next row left column)
    if (!isLeftColumn && phaseIndex < totalPhases - 1) {
      const nextPhaseIsLeftColumn = (phaseIndex + 1) % 2 === 0;
      
      if (nextPhaseIsLeftColumn) {
        return (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 sm:translate-y-10 z-10">
            <svg width="80" height="40" viewBox="0 0 80 40" className="sm:w-100 sm:h-50">
              <motion.path
                d="M 40 0 Q 40 20 0 40"
                stroke="url(#curve-line-gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                variants={lineVariants}
                initial="hidden"
                animate="show"
                transition={{ delay: phaseIndex * 0.3 + 0.5 }}
              />
              <defs>
                <linearGradient id="curve-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#B85450" stopOpacity="0.7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      }
    }
  }

  return null;
};

export default VectorLines;
