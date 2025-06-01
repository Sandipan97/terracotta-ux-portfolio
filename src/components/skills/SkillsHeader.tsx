
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  return (
    <motion.div 
      ref={ref}
      className="text-center mb-6 sm:mb-8" 
      initial={{ opacity: 0, y: 15 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 
        className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3"
        data-lovable-editable="skills-title"
      >
        Skills & Expertise
      </h2>
      <p 
        className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2"
        data-lovable-editable="skills-description"
      >
        Comprehensive skill set spanning strategic research, creative design execution, and technical leadership
      </p>
    </motion.div>
  );
};

export default SkillsHeader;
