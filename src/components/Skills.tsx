
import React from 'react';
import { motion } from 'framer-motion';
import SkillsHeader from './skills/SkillsHeader';
import SkillCategory from './skills/SkillCategory';
import CompetencyMatrix from './skills/CompetencyMatrix';
import SkillsHighlights from './skills/SkillsHighlights';
import { skillsData } from './skills/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
     
      <div className="container mx-auto px-4 md:px-6">
        
        <SkillsHeader />
        
        <CompetencyMatrix />
      
        
        <motion.div 
          className="absolute inset-0 backdrop-blur-sm bg-background/40 dark:bg-background/60 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillsData.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
        <SkillsHighlights />
      </div>

    </section>
                 
  );
};

export default Skills;
