import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollToNextSection from './ui/ScrollToNextSection';
import FeaturedProjectsHeader from './featured-projects/FeaturedProjectsHeader';
import FilterControls from './featured-projects/FilterControls';
import ProjectCard from './featured-projects/ProjectCard';
import { projects } from './project-drawer/projectData';
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
  slug?: string;
};

// Map the project data to match the expected format
const allProjects: Project[] = projects.map(project => ({
  id: project.id,
  title: project.title,
  category: project.category,
  image: project.image,
  description: project.description,
  slug: project.slug,
  results: project.id === 1 ? "Reduced error rate by 45%" : project.id === 2 ? "Accelerated development by 35%" : project.id === 3 ? "Reduced support calls by 60%" : project.id === 4 ? "Improved user satisfaction by 85%" : project.id === 5 ? "Increased monitoring accuracy by 95%" : project.id === 6 ? "Improved crop yield by 28%" : project.id === 7 ? "Increased learning outcomes by 40%" : undefined,
  date: project.id === 1 ? "2024-02" : project.id === 2 ? "2023-11" : project.id === 3 ? "2023-08" : project.id === 4 ? "2023-05" : project.id === 5 ? "2023-03" : project.id === 6 ? "2022-11" : project.id === 7 ? "2022-08" : "2024-01"
}));
const categories = ["All", ...Array.from(new Set(allProjects.map(project => project.category)))];
const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });
  const filteredProjects = selectedCategory === "All" ? allProjects : allProjects.filter(project => project.category === selectedCategory);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-card/30">
      <div className="max-w-7xl mx-auto">
        <FeaturedProjectsHeader variants={itemVariants} />
        
        <FilterControls 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          variants={itemVariants}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} index={index} variants={itemVariants} />
            </motion.div>
          ))}
        </motion.div>
        
        <ScrollToNextSection targetId="design-suite" />
      </div>
    </section>
  );
};
export default FeaturedProjects;