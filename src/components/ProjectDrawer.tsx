
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Project Portfolio
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Explore my collection of design projects across different categories and industries.
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

      <ScrollToNextSection targetId="featured-projects" />
    </section>
  );
};

export default ProjectDrawer;
