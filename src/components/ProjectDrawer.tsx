
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

  // Enhanced physics-based spring values
  const drawerY = useSpring(80, { 
    mass: 0.8, 
    stiffness: 150, 
    damping: 18 
  });

  const filteredFiles = selectedCategory === 'All' 
    ? projectFiles 
    : projectFiles.filter(file => file.category === selectedCategory);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    drawerY.set(isDrawerOpen ? 80 : 15);
  };

  return (
    <section 
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-amber-50/20 dark:to-amber-900/5 relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Enhanced wooden surface background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-50/15 to-amber-50/30 dark:via-amber-900/5 dark:to-amber-900/10" />
      
      {/* Subtle wood grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(139, 69, 19, 0.03) 1px,
              transparent 2px,
              rgba(139, 69, 19, 0.02) 4px,
              transparent 6px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              rgba(139, 69, 19, 0.02) 1px,
              transparent 3px
            )
          `
        }}
      />
      
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Enhanced Section Header */}
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
            Browse through my project portfolio like flipping through a professional file drawer. 
            Hover over each file to peek inside and discover detailed case studies, insights, and results.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <CategoryChips 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isInView}
        />

        {/* Enhanced Wooden Drawer Container */}
        <motion.div
          className="relative mx-auto max-w-6xl"
          style={{ y: drawerY }}
          initial={{ y: 120, scale: 0.95 }}
          animate={isInView ? { y: 80, scale: 1 } : { y: 120, scale: 0.95 }}
          transition={{ duration: 1.2, delay: 0.7, type: "spring", mass: 1, stiffness: 100, damping: 20 }}
        >
          {/* Enhanced Drawer Handle */}
          <DrawerHandle 
            isOpen={isDrawerOpen}
            onToggle={handleDrawerToggle}
          />

          {/* Enhanced Wooden Drawer Body */}
          <motion.div
            className="relative rounded-t-2xl shadow-2xl overflow-hidden"
            style={{
              background: `linear-gradient(145deg, #8B4513 0%, #A0522D 30%, #D2691E 70%, #8B4513 100%)`,
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 3px,
                  rgba(0,0,0,0.1) 3px,
                  rgba(0,0,0,0.05) 6px,
                  transparent 6px,
                  transparent 12px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 1px,
                  rgba(0,0,0,0.03) 1px,
                  rgba(0,0,0,0.03) 2px
                )
              `
            }}
            whileHover={{ 
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.4)' 
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Wood edge banding */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-amber-700 to-amber-800" />
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-amber-700 to-amber-800" />
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-amber-700 to-amber-800" />

            {/* Enhanced Felt Interior */}
            <div 
              className="bg-slate-900 rounded-t-xl p-12 min-h-[500px] relative"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 2px,
                    rgba(255,255,255,0.01) 2px,
                    rgba(255,255,255,0.01) 4px
                  )
                `
              }}
            >
              {/* Felt texture highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              
              {/* Enhanced File Stack */}
              <FileStack 
                files={filteredFiles}
                isDrawerOpen={isDrawerOpen}
                isVisible={isInView}
              />
            </div>
          </motion.div>
        </motion.div>

        <ScrollToNextSection targetId="featured-projects" className="mt-20" />
      </motion.div>
    </section>
  );
};

export default ProjectDrawer;
