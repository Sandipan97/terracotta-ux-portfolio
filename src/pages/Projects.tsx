
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
    category: "B2B Solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    results: "Reduced error rate by 45%",
    featured: true
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    results: "Accelerated development by 35%",
    featured: true
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    results: "Reduced support calls by 60%",
    featured: true
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Biomedical Design",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    results: "Improved user satisfaction by 85%",
    featured: true
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Biomedical Design",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    results: "Increased monitoring accuracy by 95%"
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    results: "Improved crop yield by 28%"
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Educational Design",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    results: "Increased learning outcomes by 40%"
  }
];

const categories = ["All", "B2B Solutions", "Design Systems", "AR Projects", "Biomedical Design", "Mobile Apps", "Educational Design"];

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

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section with Parallax */}
        <motion.section 
          style={{ opacity: headerOpacity, y: headerY }}
          className="bg-gradient-to-br from-bengali-terracotta to-bengali-red py-20 relative overflow-hidden"
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
            >
              My Projects
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A showcase of my UX design and research work across various industries and technologies
            </motion.p>
          </div>
        </motion.section>
        
        {/* Projects Filter */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-white/30">
                <Filter size={16} className="text-bengali-terracotta mr-2 ml-3" />
                <span className="text-sm font-medium text-bengali-dark mr-3">Filter:</span>
                
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
                      className={
                        selectedCategory === category
                          ? "bg-gradient-to-r from-bengali-terracotta to-bengali-red hover:from-bengali-terracotta/90 hover:to-bengali-red/90 text-white rounded-full"
                          : "border-bengali-terracotta/30 text-bengali-dark hover:bg-bengali-terracotta/10 rounded-full"
                      }
                      onClick={() => setSelectedCategory(category)}
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
                  className="group bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-white/30"
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-bengali-terracotta/80 to-bengali-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                      <Link to={`/projects/${project.id}`}>
                        <Button className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark transition-all duration-300 transform group-hover:scale-105">
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                    <div className="absolute top-4 left-4 bg-bengali-mustard text-bengali-dark text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-bengali-red text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-2">
                      {project.title}
                    </h3>
                    <p className="text-bengali-dark/70 mb-4">
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
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-bengali-terracotta to-bengali-red text-white relative overflow-hidden">
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Interested in Working Together?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Let's discuss how my UX design and research expertise can help your next project succeed.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-bengali-mustard to-yellow-500 text-bengali-dark hover:brightness-110 shadow-lg" asChild>
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
