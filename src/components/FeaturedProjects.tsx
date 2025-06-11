import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollToNextSection from './ui/ScrollToNextSection';
import FeaturedProjectsHeader from './featured-projects/FeaturedProjectsHeader';
import FilterControls from './featured-projects/FilterControls';
import ProjectCard from './featured-projects/ProjectCard';
import AnimatedBackground from './featured-projects/AnimatedBackground';

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

const allProjects: Project[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    results: "Reduced error rate by 45%",
    date: "2024-02"
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    results: "Accelerated development by 35%",
    date: "2023-11",
    slug: "welbilt-kitchen-connect"
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    results: "Reduced support calls by 60%",
    date: "2023-08"
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    results: "Improved user satisfaction by 85%",
    date: "2023-05"
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    results: "Increased monitoring accuracy by 95%",
    date: "2023-03"
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    results: "Improved crop yield by 28%",
    date: "2022-11"
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Others",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    results: "Increased learning outcomes by 40%",
    date: "2022-08"
  }
];

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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="featured-projects" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <AnimatedBackground />

      <motion.div 
        className="container mx-auto px-4 md:px-6 z-10 relative" 
        initial="hidden" 
        animate={isInView ? "show" : "hidden"} 
        variants={containerVariants}
      >
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
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Link to="/projects">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-bengali-terracotta hover:bg-bengali-mustard text-white hover:text-bengali-dark transition-all duration-300 group shadow-lg hover:shadow-xl"
                data-lovable-editable="featured-projects-view-all-button"
              >
                View All Projects 
                <motion.div 
                  whileHover={{ x: 5 }} 
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <ScrollToNextSection targetId="design-suite" className="mt-8" />
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
