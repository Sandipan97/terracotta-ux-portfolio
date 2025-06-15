
import { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';
import DrawerHandle from './project-drawer/DrawerHandle';
import FileStack from './project-drawer/FileStack';
import CategoryChips from './project-drawer/CategoryChips';
import { projectFiles } from './project-drawer/projectData';

const ProjectDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Physics-based spring values
  const drawerY = useSpring(80, { 
    mass: 0.7, 
    stiffness: 180, 
    damping: 15 
  });

  const filteredFiles = selectedCategory === 'All' 
    ? projectFiles 
    : projectFiles.filter(file => file.category === selectedCategory);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    drawerY.set(isDrawerOpen ? 80 : 20);
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Wooden surface background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-900/10" />
      
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Project Drawer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my curated collection of design projects, each file containing detailed case studies and insights
          </p>
        </motion.div>

        {/* Category Filter */}
        <CategoryChips 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isInView}
        />

        {/* Wooden Drawer Container */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          style={{ y: drawerY }}
          initial={{ y: 100 }}
          animate={isInView ? { y: 80 } : { y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Drawer Handle */}
          <DrawerHandle 
            isOpen={isDrawerOpen}
            onToggle={handleDrawerToggle}
          />

          {/* Wooden Drawer Body */}
          <motion.div
            className="relative bg-gradient-to-br from-amber-800 to-amber-900 rounded-t-lg shadow-2xl"
            style={{
              background: `linear-gradient(145deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)`,
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,0.1) 2px,
                  rgba(0,0,0,0.1) 4px
                )
              `
            }}
            whileHover={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
            }}
          >
            {/* Felt Interior */}
            <div 
              className="bg-slate-900 rounded-t-lg p-8 min-h-[400px]"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%)
                `
              }}
            >
              {/* File Stack */}
              <FileStack 
                files={filteredFiles}
                isDrawerOpen={isDrawerOpen}
                isVisible={isInView}
              />
            </div>
          </motion.div>
        </motion.div>

        <ScrollToNextSection targetId="design-suite" className="mt-16" />
      </motion.div>
    </section>
  );
};

export default ProjectDrawer;
