
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
      className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-4xl mx-auto px-2 sm:px-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight}
            className="bg-warm-rust/20 dark:bg-warm-rust-light/15 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-warm-rust/30 dark:border-warm-rust-light/25 focus:outline-none focus:ring-2 focus:ring-warm-rust focus:ring-offset-2 dark:focus:ring-warm-rust-light"
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
            <span className="text-warm-rust dark:text-warm-rust-light font-medium text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
              {highlight}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsHighlights;
