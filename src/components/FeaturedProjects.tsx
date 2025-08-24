
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollToNextSection from './ui/ScrollToNextSection';
import FeaturedProjectsHeader from './featured-projects/FeaturedProjectsHeader';
import FilterControls from './featured-projects/FilterControls';
import FeaturedProjectCard from './featured-projects/FeaturedProjectCard';
import { projectFiles } from './project-drawer/projectData';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
  slug?: string;
  videoThumbnail?: string;
};

// Project priority mapping based on requested order
const getProjectPriority = (project: Project): number => {
  const priorityMap: Record<string, number> = {
    'welbilt-kitchen-connect': 1,
    'pg-datalogger': 2,
    'farm-monitoring': 3,
    'dripometer': 4,
    'cyclops-ar-manual': 5,
    'gharana-food-delivery': 6,
    'o2c-project': 7,
    'toy-anatomy': 8,
  };

  // Try to match by slug first, then by title keywords
  if (project.slug && priorityMap[project.slug]) {
    return priorityMap[project.slug];
  }

  // Fallback matching by title keywords
  const title = project.title.toLowerCase();
  if (title.includes('welbilt')) return 1;
  if (title.includes('datalogger') || title.includes('p&g')) return 2;
  if (title.includes('farm monitoring')) return 3;
  if (title.includes('dripometer')) return 4;
  if (title.includes('cyclops')) return 5;
  if (title.includes('gharana')) return 6;
  if (title.includes('oxygen') || title.includes('o2c')) return 7;
  if (title.includes('toy anatomy')) return 8;

  // Default priority for any unmatched projects
  return 999;
};

// Sort projects by priority
const sortProjectsByPriority = (projects: Project[]): Project[] => {
  return [...projects].sort((a, b) => {
    const priorityA = getProjectPriority(a);
    const priorityB = getProjectPriority(b);
    return priorityA - priorityB;
  });
};

// Map the project data to match the expected format and sort by priority
const mappedProjects: Project[] = projectFiles.map(project => ({
  id: project.id,
  title: project.title,
  category: project.category,
  image: project.image,
  description: project.description,
  slug: project.slug,
  videoThumbnail: project.videoThumbnail,
  results: project.results,
  date: project.id === 1 ? "2024-02" : project.id === 2 ? "2023-11" : project.id === 3 ? "2023-08" : project.id === 4 ? "2023-05" : project.id === 5 ? "2023-03" : project.id === 6 ? "2022-11" : project.id === 7 ? "2022-08" : "2024-01"
}));

const allProjects: Project[] = sortProjectsByPriority(mappedProjects);

const categories = ["All", ...Array.from(new Set(allProjects.map(project => project.category)))];

interface FeaturedProjectsProps {
  showAll?: boolean;
}

const FeaturedProjects = ({ showAll = false }: FeaturedProjectsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Filter projects based on category (projects are already sorted by priority)
  let filteredProjects = selectedCategory === "All" ? allProjects : allProjects.filter(project => project.category === selectedCategory);
  
  // If showAll is false, limit to first 6 projects for homepage
  if (!showAll) {
    filteredProjects = filteredProjects.slice(0, 6);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100 } }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-card/30" id="featured-projects">
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
              <FeaturedProjectCard project={project} index={index} variants={itemVariants} />
            </motion.div>
          ))}
        </motion.div>
        
        {!showAll && <ScrollToNextSection targetId="design-suite" />}
      </div>
    </section>
  );
};

export default FeaturedProjects;
