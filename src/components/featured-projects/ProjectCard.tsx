
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EditableImage } from '@/components/ui/editable-image';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  date?: string;
  slug?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  variants: any;
}

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  const projectPath = project.slug ? `/projects/${project.slug}` : `/projects/${project.id}`;

  return (
    <motion.div
      variants={variants}
      className="group relative bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-border overflow-hidden"
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
    >
      <Link to={projectPath} className="block">
        {/* Image Container with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <EditableImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority={index < 3 ? 'high' : 'medium'}
            lazy={index >= 3}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-background/90 text-foreground hover:bg-background border border-border/50">
              {project.category}
            </Badge>
          </div>

          {/* Results Badge - appears on hover */}
          {project.results && (
            <motion.div 
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Badge className="bg-emerald-500/90 text-white hover:bg-emerald-500 border-none">
                <TrendingUp className="w-3 h-3 mr-1" />
                {project.results}
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Date */}
          {project.date && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{new Date(project.date).toLocaleDateString('en-US', { 
                month: 'short', 
                year: 'numeric' 
              })}</span>
            </div>
          )}

          {/* View Project Link */}
          <div className="pt-2">
            <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">
              View Case Study
              <motion.span 
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
