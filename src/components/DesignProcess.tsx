
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import DesktopLayout from './design-process/DesktopLayout';
import MobileLayout from './design-process/MobileLayout';
import { containerVariants, phaseVariants, arrowVariants, iconVariants } from './design-process/animationVariants';
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

const DesignProcess = ({
  onBackgroundChange
}: DesignProcessProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const [activeBackground, setActiveBackground] = useState<string | null>(null);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const [activePhaseId, setActivePhaseId] = useState<number | null>(null);

  // Auto-play sequence when section comes into view
  useEffect(() => {
    if (isInView && !hasAutoPlayed) {
      setHasAutoPlayed(true);
      
      const autoPlaySequence = async () => {
        // Wait a moment for the section to fully animate in
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Go through each phase with timing
        for (let i = 0; i < designPhases.length; i++) {
          const phase = designPhases[i];
          setActiveBackground(phase.backgroundTheme);
          setActivePhaseId(phase.id);
          onBackgroundChange?.(phase.backgroundTheme);
          
          // Wait for each phase to display (shorter duration for auto-play)
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        // Clear the background and active phase after the sequence
        setActiveBackground(null);
        setActivePhaseId(null);
        onBackgroundChange?.(null);
      };
      
      autoPlaySequence();
    }
  }, [isInView, hasAutoPlayed, onBackgroundChange]);

  const handlePhaseClick = (backgroundTheme: string) => {
    setActiveBackground(backgroundTheme);
    onBackgroundChange?.(backgroundTheme);
    // Reset background after 12 seconds
    setTimeout(() => {
      setActiveBackground(null);
      onBackgroundChange?.(null);
    }, 12000);
  };

  const scrollToFeaturedProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const ActiveBackgroundComponent = activeBackground ? backgroundComponents[activeBackground] : null;

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-transparent relative overflow-hidden min-h-screen flex flex-col justify-center" ref={ref}>
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

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-6 sm:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
            My Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
            Being a Product Designer at core, my research-driven approach creates user-centered solutions every sing
          </p>
        </motion.div>

        {/* Responsive layouts */}
        <div className="w-full mb-6 sm:mb-8 lg:mb-12">
          <DesktopLayout
            isInView={isInView}
            containerVariants={containerVariants}
            phaseVariants={phaseVariants}
            iconVariants={iconVariants}
            arrowVariants={arrowVariants}
            onPhaseClick={handlePhaseClick}
            activePhaseId={activePhaseId}
          />

          <MobileLayout
            isInView={isInView}
            containerVariants={containerVariants}
            phaseVariants={phaseVariants}
            iconVariants={iconVariants}
            arrowVariants={arrowVariants}
            onPhaseClick={handlePhaseClick}
            activePhaseId={activePhaseId}
          />
        </div>

        {/* Bottom description */}
        

        {/* Floating View My Work Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToFeaturedProjects}
            className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
