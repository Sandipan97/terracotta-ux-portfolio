
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FeaturedProjects from '@/components/FeaturedProjects';

const Projects = () => {
  const navigate = useNavigate();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 mt-16 bg-gradient-to-br from-warm-terracotta to-warm-golden overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              size="sm" 
              className="mb-8 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              A comprehensive collection of design solutions spanning enterprise platforms, 
              consumer products, and emerging technologies
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button 
                onClick={scrollToProjects}
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                View Projects
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <FeaturedProjects showAll={true} />
      </section>
    </div>
  );
};

export default Projects;
