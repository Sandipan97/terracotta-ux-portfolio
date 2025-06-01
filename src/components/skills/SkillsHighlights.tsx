
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = ['5+ Years Experience', 'AI-Powered Design', 'Design Systems Expert', 'Research-Driven'];

const SkillsHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  return (
    <motion.div 
      ref={ref}
      className="mt-6 sm:mt-8 text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-2">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight}
            className="bg-bengali-mustard/15 dark:bg-bengali-mustard-light/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-bengali-mustard/25 dark:border-bengali-mustard-light/25 focus:outline-none focus:ring-2 focus:ring-bengali-mustard focus:ring-offset-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.8 + index * 0.06,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{ scale: 1.02 }}
            tabIndex={0}
            role="button"
            aria-label={`Highlight: ${highlight}`}
          >
            <span className="text-bengali-mustard-dark dark:text-bengali-mustard-light font-medium text-xs sm:text-sm whitespace-nowrap">
              {highlight}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsHighlights;
