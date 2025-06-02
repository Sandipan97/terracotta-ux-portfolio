
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Figma } from 'lucide-react';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import DesignSuiteHeader from './design-suite/DesignSuiteHeader';
import ToolLogo from './design-suite/ToolLogo';
import { designTools } from './design-suite/toolsData';

const DesignSuite = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section ref={ref} className="py-6 sm:py-8 md:py-10 lg:py-12 bg-muted/20 dark:bg-card/20 relative">
      {/* Gaussian blur backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm bg-background/40 dark:bg-background/60 z-0"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <DesignSuiteHeader />

        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {designTools.map((tool, index) => (
              <ToolLogo 
                key={tool.name}
                name={tool.name}
                icon={tool.name === 'Figma' ? <Figma className="w-8 h-8" /> : tool.icon}
                color={tool.color}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll to next section button */}
        <ScrollToNextSection targetId="design-process" className="mt-6 sm:mt-8" />
      </div>
    </section>
  );
};

export default DesignSuite;
