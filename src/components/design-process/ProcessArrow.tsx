
import { motion } from 'framer-motion';

interface ProcessArrowProps {
  arrowVariants: any;
  index: number;
}

const ProcessArrow = ({ arrowVariants, index }: ProcessArrowProps) => {
  return (
    <motion.div
      className="mx-2 lg:mx-4"
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
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
        />
      </svg>
    </motion.div>
  );
};

export default ProcessArrow;
