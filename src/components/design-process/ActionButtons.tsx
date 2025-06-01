
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface ActionButtonsProps {
  onViewWorkClick: () => void;
  onScrollToNext: () => void;
}

const ActionButtons = ({ onViewWorkClick, onScrollToNext }: ActionButtonsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });

  return (
    <div ref={ref}>
      {/* View My Work Button */}
      <motion.div 
        className="flex justify-center items-center gap-4" 
        initial={{ opacity: 0, y: 20 }} 
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.button 
          onClick={onViewWorkClick} 
          className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Scroll to next section button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="flex justify-center mt-6"
      >
        <motion.button 
          onClick={onScrollToNext}
          className="text-white bg-bengali-dark/20 backdrop-blur-sm p-3 rounded-full hover:bg-bengali-dark/30 transition-colors" 
          aria-label="Scroll to about preview"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ActionButtons;
