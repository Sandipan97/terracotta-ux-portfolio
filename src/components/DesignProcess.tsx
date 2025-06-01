
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import DesktopLayout from './design-process/DesktopLayout';
import MobileLayout from './design-process/MobileLayout';
import BackgroundManager from './design-process/BackgroundManager';
import DesignProcessHeader from './design-process/DesignProcessHeader';
import ActionButtons from './design-process/ActionButtons';
import { containerVariants, phaseVariants, arrowVariants, iconVariants } from './design-process/animationVariants';
import { designPhases } from '@/data/designPhases';

interface DesignProcessProps {
  onBackgroundChange?: (theme: string | null) => void;
}

const DesignProcess = ({ onBackgroundChange }: DesignProcessProps) => {
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
        await new Promise(resolve => setTimeout(resolve, 800));

        for (let i = 0; i < designPhases.length; i++) {
          const phase = designPhases[i];
          setActiveBackground(phase.backgroundTheme);
          setActivePhaseId(phase.id);
          onBackgroundChange?.(phase.backgroundTheme);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }

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
    setTimeout(() => {
      setActiveBackground(null);
      onBackgroundChange?.(null);
    }, 12000);
  };

  const scrollToFeaturedProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAboutPreview = () => {
    const section = document.getElementById('about-preview');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-transparent relative overflow-hidden flex flex-col justify-center" ref={ref}>
      <BackgroundManager activeBackground={activeBackground} />

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10 max-w-6xl">
        <DesignProcessHeader />

        <div className="w-full mb-4 sm:mb-6 lg:mb-8">
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

        <ActionButtons 
          onViewWorkClick={scrollToFeaturedProjects}
          onScrollToNext={scrollToAboutPreview}
        />
      </div>
    </section>
  );
};

export default DesignProcess;
