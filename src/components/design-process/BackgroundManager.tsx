
import { AnimatePresence, motion } from 'framer-motion';
import ResearchBackground from './backgrounds/ResearchBackground';
import DefineBackground from './backgrounds/DefineBackground';
import MoreResearchBackground from './backgrounds/MoreResearchBackground';
import IdeateBackground from './backgrounds/IdeateBackground';
import PrototypeBackground from './backgrounds/PrototypeBackground';
import TestBackground from './backgrounds/TestBackground';
import DeployBackground from './backgrounds/DeployBackground';

const backgroundComponents = {
  'research': ResearchBackground,
  'define': DefineBackground,
  'more-research': MoreResearchBackground,
  'ideate': IdeateBackground,
  'prototype': PrototypeBackground,
  'test': TestBackground,
  'deploy': DeployBackground
};

interface BackgroundManagerProps {
  activeBackground: string | null;
}

const BackgroundManager = ({ activeBackground }: BackgroundManagerProps) => {
  const ActiveBackgroundComponent = activeBackground ? backgroundComponents[activeBackground] : null;

  return (
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
            ease: [0.23, 1, 0.32, 1],
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
  );
};

export default BackgroundManager;
