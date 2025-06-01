
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { EditableImage } from '../ui/editable-image';
import { ArrowRight, Calendar, Target } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  variants: any;
}

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-bengali-terracotta/30 transition-all duration-500 hover:shadow-2xl hover:shadow-bengali-terracotta/10" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      variants={variants} 
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
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }} 
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
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
  );
};

export default ProjectCard;
