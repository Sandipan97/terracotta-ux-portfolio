
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import DesktopLayout from './design-process/DesktopLayout';
import MobileLayout from './design-process/MobileLayout';
import { 
  containerVariants, 
  phaseVariants, 
  arrowVariants, 
  iconVariants 
} from './design-process/animationVariants';
import { designPhases } from '@/data/designPhases';
import ResearchBackground from './design-process/backgrounds/ResearchBackground';
import DefineBackground from './design-process/backgrounds/DefineBackground';
import MoreResearchBackground from './design-process/backgrounds/MoreResearchBackground';
import IdeateBackground from './design-process/backgrounds/IdeateBackground';
import PrototypeBackground from './design-process/backgrounds/PrototypeBackground';
import TestBackground from './design-process/backgrounds/TestBackground';
import DeployBackground from './design-process/backgrounds/DeployBackground';

const backgroundComponents = {
  'research': ResearchBackground,
  'define': DefineBackground,
  'more-research': MoreResearchBackground,
  'ideate': IdeateBackground,
  'prototype': PrototypeBackground,
  'test': TestBackground,
  'deploy': DeployBackground
};

interface DesignProcessProps {
  onBackgroundChange?: (theme: string | null) => void;
}

const DesignProcess = ({ onBackgroundChange }: DesignProcessProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeBackground, setActiveBackground] = useState<string | null>(null);

  const handlePhaseClick = (backgroundTheme: string) => {
    setActiveBackground(backgroundTheme);
    onBackgroundChange?.(backgroundTheme);
    // Reset background after 12 seconds
    setTimeout(() => {
      setActiveBackground(null);
      onBackgroundChange?.(null);
    }, 12000);
  };

  const ActiveBackgroundComponent = activeBackground ? backgroundComponents[activeBackground] : null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden" ref={ref}>
      {/* Local section background when active */}
      {ActiveBackgroundComponent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <ActiveBackgroundComponent />
        </motion.div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
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

        {/* Responsive layouts */}
        <div className="w-full">
          <DesktopLayout 
            isInView={isInView}
            containerVariants={containerVariants}
            phaseVariants={phaseVariants}
            iconVariants={iconVariants}
            arrowVariants={arrowVariants}
            onPhaseClick={handlePhaseClick}
          />

          <MobileLayout 
            isInView={isInView}
            containerVariants={containerVariants}
            phaseVariants={phaseVariants}
            iconVariants={iconVariants}
            arrowVariants={arrowVariants}
            onPhaseClick={handlePhaseClick}
          />
        </div>

        {/* Bottom description */}
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
          {activeBackground && (
            <motion.p
              className="text-bengali-terracotta font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Click on any phase to see its themed background animation!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
