
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
        <svg width="60" height="20" viewBox="0 0 60 20" className="overflow-visible">
          <motion.path
            d="M 0 10 Q 30 5 60 10"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            variants={lineVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: phaseIndex * 0.3 + 0.5 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
    const isEvenRow = Math.floor(phaseIndex / 2) % 2 === 0;
    const isLeftColumn = phaseIndex % 2 === 0;
    const nextIsLeftColumn = (phaseIndex + 1) % 2 === 0;
    
    // Same row connection (horizontal)
    if (isLeftColumn && nextIsLeftColumn === false) {
      return (
        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-10">
          <svg width="40" height="20" viewBox="0 0 40 20" className="overflow-visible">
            <motion.path
              d="M 0 10 L 40 10"
              stroke="url(#mobileLineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: phaseIndex * 0.3 + 0.5 }}
            />
            <defs>
              <linearGradient id="mobileLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#802f1f" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#F9D342" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }
    
    // End of row to next row (curved down)
    if (!isLeftColumn && phaseIndex < totalPhases - 1) {
      return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-10">
          <svg width="100" height="60" viewBox="0 0 100 60" className="overflow-visible">
            <motion.path
              d="M 50 0 Q 50 30 0 60"
              stroke="url(#curveLineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: phaseIndex * 0.3 + 0.5 }}
            />
            <defs>
              <linearGradient id="curveLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F9D342" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#802f1f" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }
  }

  return null;
};

export default VectorLines;
