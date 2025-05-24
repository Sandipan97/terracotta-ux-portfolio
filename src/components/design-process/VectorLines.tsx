
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
      <div className="flex items-center justify-center mt-10 mx-4">
        <svg width="80" height="20" viewBox="0 0 80 20" className="overflow-visible">
          <motion.path
            d="M 0 10 Q 40 5 80 10"
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
              <stop offset="0%" stopColor="#802f1f" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#F9D342" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#802f1f" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  } else {
    // Mobile: vertical lines and curves for 2-column layout
    const isLeftColumn = phaseIndex % 2 === 0;
    
    // Same row connection (horizontal) - left to right
    if (isLeftColumn && phaseIndex < totalPhases - 1) {
      return (
        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-10">
          <svg width="40" height="20" viewBox="0 0 40 20" className="overflow-visible">
            <motion.path
              d="M 0 10 L 40 10"
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
                <stop offset="0%" stopColor="#802f1f" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#F9D342" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }
    
    // End of row to next row (curved down) - right to left of next row
    if (!isLeftColumn && phaseIndex < totalPhases - 1) {
      const nextPhaseIsLeftColumn = (phaseIndex + 1) % 2 === 0;
      
      if (nextPhaseIsLeftColumn) {
        return (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-10">
            <svg width="120" height="60" viewBox="0 0 120 60" className="overflow-visible">
              <motion.path
                d="M 50 0 Q 50 30 0 60"
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
                  <stop offset="0%" stopColor="#F9D342" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#802f1f" stopOpacity="0.6"/>
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
