
import { motion } from 'framer-motion';

interface ProcessArrowProps {
  arrowVariants: any;
  index: number;
  isVertical?: boolean;
}

const ProcessArrow = ({ arrowVariants, index, isVertical = false }: ProcessArrowProps) => {
  if (isVertical) {
    return (
      <motion.div
        className="my-2"
        variants={arrowVariants}
      >
        <svg 
          width="16" 
          height="24" 
          viewBox="0 0 16 24" 
          fill="none" 
          className="text-bengali-terracotta"
        >
          <motion.path 
            d="M8 2v18m-5-5l5 5 5-5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="white"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
          />
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mx-2 lg:mx-4 hidden md:block"
      variants={arrowVariants}
    >
      <svg 
        width="24" 
        height="16" 
        viewBox="0 0 24 16" 
        fill="none" 
        className="text-bengali-terracotta"
      >
        <motion.path 
          d="M16 1l6 7-6 7M22 8H2" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
        />
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export default ProcessArrow;
