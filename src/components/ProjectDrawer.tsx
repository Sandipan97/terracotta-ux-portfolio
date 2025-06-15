
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

  const filteredFiles = selectedCategory === 'All' 
    ? projectFiles 
    : projectFiles.filter(file => file.category === selectedCategory);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <section 
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-slate-100/30 dark:to-slate-800/10 relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/20 to-slate-100/40 dark:via-slate-800/10 dark:to-slate-800/20" />
      
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
            Browse through my project portfolio like looking into a professional file drawer from above. 
            Hover over each file to peek inside and discover detailed case studies and insights.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <CategoryChips 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isInView}
        />

        {/* Top-Down File Drawer Container */}
        <motion.div
          className="relative mx-auto max-w-6xl perspective-[1000px]"
          initial={{ y: 60, opacity: 0, rotateX: 15 }}
          animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: 60, opacity: 0, rotateX: 15 }}
          transition={{ duration: 1.2, delay: 0.7, type: "spring", mass: 1, stiffness: 100, damping: 20 }}
        >
          {/* Drawer Frame - Top View */}
          <motion.div
            className="relative rounded-2xl shadow-2xl overflow-hidden transform-gpu"
            style={{
              background: `linear-gradient(135deg, #64748B 0%, #475569 30%, #334155 70%, #1E293B 100%)`,
              boxShadow: `
                0 0 0 8px #374151,
                0 0 0 12px #4B5563,
                0 25px 50px -12px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2)
              `
            }}
            whileHover={{ 
              boxShadow: `
                0 0 0 8px #374151,
                0 0 0 12px #4B5563,
                0 35px 70px -12px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2)
              `
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Drawer Interior */}
            <div 
              className="bg-slate-800 p-8 min-h-[600px] relative"
              style={{
                background: `
                  linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%),
                  radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
                `,
                boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Drawer Rail Lines */}
              <div className="absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full opacity-60" />
              <div className="absolute right-4 top-4 bottom-4 w-1 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full opacity-60" />
              
              {/* File Stack in Perspective */}
              <FileStack 
                files={filteredFiles}
                isDrawerOpen={isDrawerOpen}
                isVisible={isInView}
              />
            </div>

            {/* Drawer Label */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-slate-600/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white text-sm font-medium">PROJECT PORTFOLIO</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <ScrollToNextSection targetId="featured-projects" className="mt-20" />
      </motion.div>
    </section>
  );
};

export default ProjectDrawer;
