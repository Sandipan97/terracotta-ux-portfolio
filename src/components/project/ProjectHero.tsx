
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  duration?: string;
  role?: string;
  projectType?: string[];
};

interface ProjectHeroProps {
  project: Project;
  onBack: () => void;
  onScrollToContent: () => void;
}

const ProjectHero = ({ project, onBack, onScrollToContent }: ProjectHeroProps) => {
  return (
    <>
      {/* Hero Image Section - Half Height */}
      <section className="w-full relative h-[40vh] xs:h-[45vh] md:h-[50vh] overflow-hidden">
        {/* Back button */}
        <motion.div 
          className="absolute top-4 left-4 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button 
            onClick={onBack}
            variant="secondary" 
            className="bg-white/80 backdrop-blur-sm text-bengali-dark hover:bg-white hover:text-bengali-terracotta transition-all duration-300"
            size="icon"
          >
            <ArrowLeft size={20} />
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <EditableImage 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            fallbackSrc="/placeholder.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
        </motion.div>
      </section>

      {/* Information Banner Section */}
      <section className="w-full bg-white py-8 xs:py-10 md:py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Project Type Chips */}
            <div className="flex flex-wrap gap-2 mb-4 xs:mb-6 justify-center md:justify-start">
              {project.projectType?.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300">
                    {type}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Project Title */}
            <motion.h1 
              className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-6 text-bengali-dark text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {project.title}
            </motion.h1>
            
            {/* Project Description */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg mb-6 xs:mb-8 text-bengali-dark/80 text-center md:text-left max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {project.description}
            </motion.p>
            
            {/* Project Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 mb-8 xs:mb-10">
              {project.client && (
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 xs:p-5 rounded-lg border border-white/60 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-bengali-terracotta text-xs xs:text-sm font-medium mb-1 xs:mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-sm xs:text-base text-bengali-dark">{project.client}</p>
                </motion.div>
              )}
              
              {project.duration && (
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 xs:p-5 rounded-lg border border-white/60 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-bengali-terracotta text-xs xs:text-sm font-medium mb-1 xs:mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-sm xs:text-base text-bengali-dark">{project.duration}</p>
                </motion.div>
              )}
              
              {project.role && (
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 xs:p-5 rounded-lg border border-white/60 shadow-sm sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-bengali-terracotta text-xs xs:text-sm font-medium mb-1 xs:mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-sm xs:text-base text-bengali-dark">{project.role}</p>
                </motion.div>
              )}
            </div>
            
            {/* CTA Button */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Button 
                onClick={onScrollToContent}
                className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                View More Details <ChevronDown className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectHero;
