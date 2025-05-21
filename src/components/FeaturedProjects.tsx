
import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EditableImage } from './ui/editable-image';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
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
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    results: "Accelerated development by 35%",
    date: "2023-11"
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

// Extract unique categories for filter
const categories = ["All", ...Array.from(new Set(allProjects.map(project => project.category)))];

const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15
      }
    }
  };

  return (
    <section id="featured-projects" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bengali-mustard/10 filter blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bengali-terracotta/10 filter blur-3xl animate-[pulse_20s_ease-in-out_infinite]"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold text-bengali-dark mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-bengali-dark/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A showcase of my UX design and research work across various industries and technologies
          </motion.p>
        </div>

        {/* Filter Controls */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center bg-bengali-terracotta/5 backdrop-blur-sm p-2 rounded-full">
            <Filter size={16} className="text-bengali-terracotta mr-2 ml-3" />
            <span className="text-sm font-medium text-bengali-dark mr-3">Filter:</span>
            
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`
                  rounded-full text-sm px-4 py-1 transition-all duration-300 
                  ${selectedCategory === category 
                    ? "bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white" 
                    : "border-bengali-terracotta/30 text-bengali-dark hover:bg-bengali-terracotta/10"
                  }
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-sm bg-white/60 border border-white/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <EditableImage 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bengali-terracotta/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                  <Link to={`/projects/${project.id}`}>
                    <Button className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark transition-all duration-300 transform group-hover:scale-105">
                      View Case Study
                    </Button>
                  </Link>
                </div>
                <div className="absolute top-4 left-4 bg-bengali-mustard text-bengali-dark text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
                {project.date && (
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-bengali-dark text-xs px-3 py-1 rounded-full">
                    {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-bengali-dark/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                {project.results && (
                  <div className="text-bengali-red font-medium mb-4">
                    Result: {project.results}
                  </div>
                )}
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-bengali-terracotta hover:text-bengali-red transition-colors font-medium group"
                >
                  View Details 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/projects">
            <Button className="bg-bengali-terracotta hover:bg-bengali-mustard text-white hover:text-bengali-dark transition-all duration-300 group">
              View All Projects 
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
