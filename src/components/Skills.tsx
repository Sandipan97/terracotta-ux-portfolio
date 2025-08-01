
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import SkillsHeader from './skills/SkillsHeader';
import SkillCategory from './skills/SkillCategory';
import SkillsHighlights from './skills/SkillsHighlights';
import CompetencyMatrix from './skills/CompetencyMatrix';
import { skillCategories } from './skills/skillsData';

const Skills = () => {
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
        <SkillsHeader />

        <CompetencyMatrix />

        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCategory 
                key={category.title} 
                category={category} 
                categoryIndex={categoryIndex} 
              />
            ))}
          </div>
        </motion.div>

        <SkillsHighlights />

        {/* Scroll to next section button */}
        <ScrollToNextSection targetId="project-drawer" className="mt-6 sm:mt-8" />
      </div>
    </section>
  );
};

export default Skills;
