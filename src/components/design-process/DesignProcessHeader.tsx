
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DesignProcessHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });

  return (
    <motion.div 
      ref={ref}
      className="text-center mb-4 sm:mb-6 lg:mb-8" 
      initial={{ opacity: 0, y: 20 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4">
        My Design Process
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
        Being a Product Designer at core, my research-driven approach creates user-centered solutions every single time
      </p>
    </motion.div>
  );
};

export default DesignProcessHeader;
