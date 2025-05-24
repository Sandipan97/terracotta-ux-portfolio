
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden dark:from-background dark:to-card/30" ref={ref}>
      {/* Background decoration with improved dark mode support */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-bengali-mustard/10 filter blur-2xl dark:bg-bengali-mustard/20"
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
          className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-bengali-terracotta/10 filter blur-2xl dark:bg-bengali-terracotta/20"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            My Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            A structured, research-driven approach to creating user-centered solutions
          </p>
        </motion.div>

        {/* Responsive layouts with improved spacing */}
        <div className="w-full">
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
        </div>

        {/* Bottom description with improved responsive text */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            This iterative process ensures that every design decision is backed by research and user feedback, 
            creating solutions that are both innovative and user-centered.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
