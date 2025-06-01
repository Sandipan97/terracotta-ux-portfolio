
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
    <section className="py-6 sm:py-8 lg:py-10 bg-transparent relative overflow-hidden flex flex-col justify-center" ref={ref}>
      {/* Local section background when active with smooth transitions */}
      <AnimatePresence mode="wait">
        {ActiveBackgroundComponent && (
          <motion.div
            key={activeBackground}
            initial={{
              opacity: 0,
              scale: 1.1,
              x: 100
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              x: -100
            }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1], // Custom bezier curve for smooth glide
              opacity: { duration: 0.6 },
              scale: { duration: 0.7 },
              x: { duration: 0.8, ease: "easeInOut" }
            }}
            className="absolute inset-0 z-0"
          >
            <ActiveBackgroundComponent />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10 max-w-6xl">
        <motion.div className="text-center mb-4 sm:mb-6 lg:mb-8" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4">
            My Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">Being a Product Designer at core, my research-driven approach creates user-centered solutions every single time</p>
        </motion.div>

        {/* Responsive layouts */}
        <div className="w-full mb-4 sm:mb-6 lg:mb-8">
          <DesktopLayout isInView={isInView} containerVariants={containerVariants} phaseVariants={phaseVariants} iconVariants={iconVariants} arrowVariants={arrowVariants} onPhaseClick={handlePhaseClick} activePhaseId={activePhaseId} />

          <MobileLayout isInView={isInView} containerVariants={containerVariants} phaseVariants={phaseVariants} iconVariants={iconVariants} arrowVariants={arrowVariants} onPhaseClick={handlePhaseClick} activePhaseId={activePhaseId} />
        </div>

        {/* Floating View My Work Button */}
        <motion.div className="flex justify-center items-center gap-4" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 1.2
      }}>
          <motion.button onClick={scrollToFeaturedProjects} className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
