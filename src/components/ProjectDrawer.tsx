
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import CategoryChips from './project-drawer/CategoryChips';
import ProjectGrid from './project-drawer/ProjectGrid';
import { projectFiles } from './project-drawer/projectData';

const ProjectDrawer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredFiles = selectedCategory === 'All' 
    ? projectFiles 
    : projectFiles.filter(file => file.category === selectedCategory);

  return (
    <section 
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-slate-100/50 dark:to-slate-800/30 relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/40 to-slate-100/60 dark:via-slate-800/20 dark:to-slate-800/40" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-heading text-5xl font-bold text-foreground mb-6">
            📁 Project File Drawer
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
            Browse through my project portfolio with interactive hover previews. 
            Discover detailed case studies and insights with seamless color-matched animations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <CategoryChips 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isInView}
        />

        {/* Project Grid */}
        <ProjectGrid 
          files={filteredFiles}
          isVisible={isInView}
        />

        <ScrollToNextSection targetId="featured-projects" className="mt-20" />
      </div>
    </section>
  );
};

export default ProjectDrawer;
