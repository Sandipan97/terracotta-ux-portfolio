import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Filter, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EditableImage } from './ui/editable-image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollToNextSection from './ui/ScrollToNextSection';
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
};
const allProjects: Project[] = [{
  id: 1,
  title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
  category: "UX Design",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
  results: "Reduced error rate by 45%",
  date: "2024-02"
}, {
  id: 2,
  title: "Design System and Revamp Project - Welbilt Kitchen Connect",
  category: "Design Systems",
  image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
  results: "Accelerated development by 35%",
  date: "2023-11"
}, {
  id: 3,
  title: "AR Interactive User Manual - LG Cyclops",
  category: "AR Projects",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
  results: "Reduced support calls by 60%",
  date: "2023-08"
}, {
  id: 4,
  title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
  category: "Product Design",
  image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
  results: "Improved user satisfaction by 85%",
  date: "2023-05"
}, {
  id: 5,
  title: "Dripometer - IV Drip Monitoring System - IISc",
  category: "Product Design",
  image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
  results: "Increased monitoring accuracy by 95%",
  date: "2023-03"
}, {
  id: 6,
  title: "Farm Monitoring Mobile Application - HCLTech",
  category: "UX Design",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
  results: "Improved crop yield by 28%",
  date: "2022-11"
}, {
  id: 7,
  title: "Toy Anatomy - Kids Toy Project - IISc",
  category: "Others",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
  results: "Increased learning outcomes by 40%",
  date: "2022-08"
}];

// Extract unique categories for filter
const categories = ["All", ...Array.from(new Set(allProjects.map(project => project.category)))];
const FeaturedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1
  });
  
  const filteredProjects = selectedCategory === "All" ? allProjects : allProjects.filter(project => project.category === selectedCategory);

  // Animation variants for staggered animations
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
    <section id="featured-projects" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 bg-background">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bengali-mustard/10 filter blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }} 
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-bengali-terracotta/10 filter blur-3xl" 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }} 
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 z-10 relative" 
        initial="hidden" 
        animate={isInView ? "show" : "hidden"} 
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" 
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto" 
            variants={itemVariants}
          >
            A showcase of my UX design and research work across various industries and technologies
          </motion.p>
        </div>

        {/* Filter Controls - Made Responsive */}
        <motion.div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12" variants={itemVariants}>
          <div className="flex flex-col sm:flex-row items-center bg-muted/50 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg border border-border w-full sm:w-auto max-w-full overflow-x-auto">
            <div className="flex items-center mb-2 sm:mb-0 sm:mr-3">
              <Filter size={14} className="text-bengali-terracotta mr-2" />
              <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">Filter:</span>
            </div>
            
            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start w-full sm:w-auto">
              {categories.map((category, index) => (
                <motion.div 
                  key={category} 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 * index, duration: 0.3 }} 
                  className="flex-shrink-0"
                >
                  <Button 
                    variant={selectedCategory === category ? "default" : "outline"} 
                    className={`
                      rounded-full text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 transition-all duration-300 whitespace-nowrap
                      ${selectedCategory === category ? "bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white shadow-lg" : "border-bengali-terracotta/30 text-foreground hover:bg-bengali-terracotta/10"}
                    `} 
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group relative bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-bengali-terracotta/30 transition-all duration-500 hover:shadow-2xl hover:shadow-bengali-terracotta/10" 
              onMouseEnter={() => setHoveredProject(project.id)} 
              onMouseLeave={() => setHoveredProject(null)} 
              variants={itemVariants} 
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }} 
              layout
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <motion.div 
                  className="relative w-full h-full" 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <EditableImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </motion.div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-bengali-terracotta text-xs font-medium px-3 py-1.5 rounded-full border border-bengali-terracotta/20 shadow-lg">
                  {project.category}
                </div>
                
                {/* Date Badge */}
                {project.date && (
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-muted-foreground text-xs px-3 py-1.5 rounded-full border border-border/50 shadow-lg flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short'
                    })}
                  </div>
                )}

                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-bengali-terracotta/95 to-bengali-red/95 flex items-center justify-center backdrop-blur-sm" 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    scale: hoveredProject === project.id ? 1 : 0.8
                  }} 
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20
                    }} 
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Link to={`/projects/${project.id}`}>
                      <Button className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                        View Case Study
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Content Section */}
              <motion.div 
                className="p-6 space-y-4" 
                whileHover={{ backgroundColor: "rgba(249, 211, 66, 0.05)" }} 
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground line-clamp-2 group-hover:text-bengali-terracotta transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results Section */}
                {project.results && (
                  <motion.div 
                    className="flex items-center gap-2 p-3 bg-bengali-terracotta/5 rounded-lg border border-bengali-terracotta/10" 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 0.2 }}
                  >
                    <Target size={14} className="text-bengali-terracotta flex-shrink-0" />
                    <span className="text-bengali-terracotta font-medium text-sm">
                      {project.results}
                    </span>
                  </motion.div>
                )}

                {/* Action Link */}
                <Link 
                  to={`/projects/${project.id}`} 
                  className="inline-flex items-center text-bengali-terracotta hover:text-bengali-red transition-colors font-medium group/link text-sm"
                >
                  <motion.span 
                    whileHover={{ x: 5 }} 
                    transition={{ duration: 0.2 }}
                  >
                    View Details 
                  </motion.span>
                  <motion.div 
                    whileHover={{ x: 3 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} className="ml-2" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Link to="/projects">
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-bengali-terracotta hover:bg-bengali-mustard text-white hover:text-bengali-dark transition-all duration-300 group shadow-lg hover:shadow-xl">
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

        {/* Scroll to next section button */}
        <ScrollToNextSection targetId="design-process" className="mt-8" />
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
