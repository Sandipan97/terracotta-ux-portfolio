import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Filter } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  featured?: boolean;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    results: "Reduced error rate by 45%",
    featured: true
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    results: "Accelerated development by 35%",
    featured: true
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    results: "Reduced support calls by 60%",
    featured: true
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    results: "Improved user satisfaction by 85%",
    featured: true
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    results: "Increased monitoring accuracy by 95%"
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    results: "Improved crop yield by 28%"
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Others",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    results: "Increased learning outcomes by 40%"
  }
];

const categories = ["All", "UX Design", "Design Systems", "AR Projects", "Product Design", "Others"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -20]);
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const getProjectLink = (project: any) => {
    if (project.id === 2) {
      return '/projects/welbilt-kitchen-connect';
    }
    if (project.id === 3) {
      return '/projects/lg-cyclops-ar';
    }
    return `/projects/${project.id}`;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section with Parallax */}
        <motion.section 
          style={{ opacity: headerOpacity, y: headerY }}
          className="bg-gradient-to-br from-bengali-terracotta to-bengali-red dark:from-bengali-terracotta-light dark:to-bengali-red-light py-20 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-white/10 filter blur-xl"
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 10,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-[10%] right-[15%] w-40 h-40 rounded-full bg-bengali-mustard/20 filter blur-xl"
              animate={{ 
                y: [0, -30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div 
              className="absolute -top-2 left-4 z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={goBack}
                variant="ghost" 
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                size="icon"
              >
                <ArrowLeft size={20} />
              </Button>
            </motion.div>

            <motion.h1 
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              data-lovable-editable="projects-page-title"
            >
              My Projects
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-lovable-editable="projects-page-description"
            >
              A showcase of my UX design and research work across various industries and technologies
            </motion.p>
          </div>
        </motion.section>
        
        {/* Projects Filter */}
        <section className="py-12 bg-background dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center bg-card/50 dark:bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-border">
                <Filter size={16} className="text-bengali-terracotta dark:text-bengali-mustard-light mr-2 ml-3" />
                <span 
                  className="text-sm font-medium text-foreground mr-3"
                  data-lovable-editable="projects-filter-label"
                >
                  Filter:
                </span>
                
                {categories.map((category, index) => (
                  <motion.div 
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Button
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={
                        selectedCategory === category
                          ? "bg-gradient-to-r from-bengali-terracotta to-bengali-red hover:from-bengali-terracotta/90 hover:to-bengali-red/90 text-white rounded-full dark:from-bengali-terracotta-light dark:to-bengali-red-light shadow-lg hover:shadow-xl transition-all duration-300"
                          : "border-border text-foreground hover:bg-muted rounded-full dark:hover:bg-card/60 shadow-sm hover:shadow-md transition-all duration-300"
                      }
                      onClick={() => setSelectedCategory(category)}
                      data-lovable-editable={`projects-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="group bg-card/50 dark:bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { 
                      y: 0, 
                      opacity: 1,
                      transition: {
                        type: "spring",
                        damping: 15
                      }
                    }
                  }}
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-bengali-terracotta/80 to-bengali-red/80 dark:from-bengali-terracotta-light/80 dark:to-bengali-red-light/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                      <Link to={getProjectLink(project)}>
                        <Button 
                          className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark dark:bg-background dark:text-bengali-terracotta-light dark:hover:bg-bengali-mustard-light dark:hover:text-background transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
                          data-lovable-editable="projects-page-view-case-study"
                        >
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                    <div 
                      className="absolute top-4 left-4 bg-bengali-mustard dark:bg-bengali-mustard-light text-bengali-dark dark:text-background text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-md"
                      data-lovable-editable={`projects-page-category-${project.id}`}
                    >
                      {project.category}
                    </div>
                    {project.featured && (
                      <div 
                        className="absolute top-4 right-4 bg-bengali-red dark:bg-bengali-red-light text-white dark:text-background text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-md"
                        data-lovable-editable={`projects-page-featured-${project.id}`}
                      >
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 
                      className="font-heading text-xl font-semibold text-foreground mb-2"
                      data-lovable-editable={`projects-page-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-muted-foreground mb-4"
                      data-lovable-editable={`projects-page-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                    {project.results && (
                      <div className="text-bengali-red dark:text-bengali-red-light font-medium mb-4">
                        <span data-lovable-editable="projects-page-result-label">Result: </span>
                        <span data-lovable-editable={`projects-page-result-${project.id}`}>{project.results}</span>
                      </div>
                    )}
                    <Link 
                      to={getProjectLink(project)}
                      className="inline-flex items-center text-bengali-terracotta dark:text-bengali-mustard-light hover:text-bengali-red dark:hover:text-bengali-mustard transition-colors font-medium group"
                    >
                      <span data-lovable-editable="projects-page-view-details">View Details</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-bengali-terracotta to-bengali-red dark:from-bengali-terracotta-light dark:to-bengali-red-light relative overflow-hidden">
          {/* Parallax background elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 filter blur-xl"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-bengali-mustard/10 filter blur-xl"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 
                className="font-heading text-3xl md:text-4xl font-bold text-white mb-6"
                data-lovable-editable="projects-page-cta-title"
              >
                Interested in Working Together?
              </h2>
              <p 
                className="text-white/80 max-w-2xl mx-auto mb-8"
                data-lovable-editable="projects-page-cta-description"
              >
                Let's discuss how my UX design and research expertise can help your next project succeed.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-bengali-mustard to-bengali-mustard-dark dark:from-bengali-mustard-light dark:to-bengali-mustard text-bengali-dark dark:text-background hover:brightness-110 shadow-lg hover:shadow-xl transition-all duration-300" 
                  asChild
                  data-lovable-editable="projects-page-cta-button"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
