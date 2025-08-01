
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import CategoryChips from './project-drawer/CategoryChips';
import ProjectGrid from './project-drawer/ProjectGrid';
import { projectFiles } from './project-drawer/projectData';

const ProjectDrawer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });

  const filteredFiles = selectedCategory === 'All' ? projectFiles : projectFiles.filter(file => file.category === selectedCategory);

  return (
    <section ref={ref} className="py-20 px-6 bg-secondary/30 dark:bg-card/30 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            data-lovable-editable="project-drawer-title"
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Portfolio Archive
          </h2>
          <p 
            data-lovable-editable="project-drawer-description"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Browse through my complete collection of design projects, from mobile apps to AR experiences and design systems.
          </p>
        </motion.div>

        <CategoryChips
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isInView}
        />

        <ProjectGrid
          files={filteredFiles}
          isVisible={isInView}
        />
      </div>
      
      <ScrollToNextSection targetId="featured-projects" />
    </section>
  );
};

export default ProjectDrawer;
