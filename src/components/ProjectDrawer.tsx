
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import CategoryChips from './project-drawer/CategoryChips';
import ProjectGrid from './project-drawer/ProjectGrid';
import { projectFiles } from './project-drawer/projectData';

const ProjectDrawer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2 
            className="font-heading text-5xl font-bold text-foreground mb-6"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            📁 Project File Drawer
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Browse through my project portfolio with interactive hover previews. 
            Discover detailed case studies and insights with seamless color-matched animations.
          </motion.p>
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
      </motion.div>
    </section>
  );
};

export default ProjectDrawer;
