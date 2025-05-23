
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DesktopLayout from './design-process/DesktopLayout';
import MobileLayout from './design-process/MobileLayout';
import { 
  containerVariants, 
  phaseVariants, 
  arrowVariants, 
  iconVariants 
} from './design-process/animationVariants';

const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-bengali-mustard/10 filter blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-bengali-terracotta/10 filter blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-bengali-dark mb-4">
            My Design Process
          </h2>
          <p className="text-bengali-dark/70 max-w-2xl mx-auto text-lg">
            A structured, research-driven approach to creating user-centered solutions
          </p>
        </motion.div>

        <DesktopLayout 
          isInView={isInView}
          containerVariants={containerVariants}
          phaseVariants={phaseVariants}
          iconVariants={iconVariants}
          arrowVariants={arrowVariants}
        />

        <MobileLayout 
          isInView={isInView}
          containerVariants={containerVariants}
          phaseVariants={phaseVariants}
          iconVariants={iconVariants}
          arrowVariants={arrowVariants}
        />

        {/* Bottom description */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-bengali-dark/60 max-w-3xl mx-auto">
            This iterative process ensures that every design decision is backed by research and user feedback, 
            creating solutions that are both innovative and user-centered.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
