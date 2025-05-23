
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
  heroScale: any;
  onBack: () => void;
  onScrollToContent: () => void;
}

const ProjectHero = ({ project, heroScale, onBack, onScrollToContent }: ProjectHeroProps) => {
  return (
    <section className="w-full relative h-[50vh] xs:h-[60vh] md:h-[90vh] overflow-hidden">
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

      {/* Parallax Hero Image */}
      <motion.div 
        style={{ scale: heroScale }}
        className="absolute inset-0 z-10"
      >
        <EditableImage 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          fallbackSrc="/placeholder.svg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10"></div>
      </motion.div>

      {/* Project Title & Info - Centered in the Hero */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.projectType?.map((type, index) => (
                <Badge key={index} className="bg-white/20 text-white hover:bg-white hover:text-bengali-terracotta">
                  {type}
                </Badge>
              ))}
            </div>

            <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow">
              {project.title}
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8">
              {project.client && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 xs:p-4">
                  <h3 className="text-white/80 text-xs xs:text-sm mb-1">Client</h3>
                  <p className="font-medium text-sm xs:text-base">{project.client}</p>
                </div>
              )}
              
              {project.duration && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 xs:p-4">
                  <h3 className="text-white/80 text-xs xs:text-sm mb-1">Duration</h3>
                  <p className="font-medium text-sm xs:text-base">{project.duration}</p>
                </div>
              )}
              
              {project.role && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 xs:p-4">
                  <h3 className="text-white/80 text-xs xs:text-sm mb-1">My Role</h3>
                  <p className="font-medium text-sm xs:text-base">{project.role}</p>
                </div>
              )}
            </div>
            
            <Button 
              onClick={onScrollToContent}
              className="backdrop-blur-sm bg-bengali-terracotta/90 hover:bg-bengali-terracotta"
            >
              View More <ChevronDown className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
