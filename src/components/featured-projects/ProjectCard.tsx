
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { EditableImage } from '../ui/editable-image';

interface ProjectCardProps {
  project: any;
  index: number;
  variants: any;
}

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  const getProjectLink = (project: any) => {
    if (project.slug) {
      return `/projects/${project.slug}`;
    }
    return `/projects/${project.id}`;
  };

  return (
    <motion.div 
      className="group bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border dark-glow-card"
      variants={variants}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden">
        <EditableImage 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 dark-glow-image"
          fallbackSrc="/placeholder.svg"
          objectFit="cover"
          objectPosition="center"
          editableKey={`featured-project-card-image-${project.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-bengali-terracotta/80 to-bengali-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <Link to={getProjectLink(project)}>
            <Button 
              className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
              data-lovable-editable="true"
              data-lovable-key={`project-card-${project.id}-cta-button`}
              data-lovable-path={`featuredProjects.${project.id}.ctaButton`}
            >
              View Case Study
            </Button>
          </Link>
        </div>
        <div 
          className="absolute top-4 left-4 bg-bengali-mustard text-bengali-dark text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-md"
          data-lovable-editable="true"
          data-lovable-key={`project-card-${project.id}-category-badge`}
          data-lovable-path={`featuredProjects.${project.id}.category`}
        >
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 
          className="font-heading text-xl font-semibold text-foreground mb-2"
          data-lovable-editable="true"
          data-lovable-key={`project-card-${project.id}-title`}
          data-lovable-path={`featuredProjects.${project.id}.title`}
        >
          {project.title}
        </h3>
        <p 
          className="text-muted-foreground mb-4"
          data-lovable-editable="true"
          data-lovable-key={`project-card-${project.id}-description`}
          data-lovable-path={`featuredProjects.${project.id}.description`}
        >
          {project.description}
        </p>
        {project.results && (
          <div 
            className="text-bengali-red font-medium mb-4"
            data-lovable-editable="true"
            data-lovable-key={`project-card-${project.id}-results`}
            data-lovable-path={`featuredProjects.${project.id}.results`}
          >
            Result: {project.results}
          </div>
        )}
        <Link 
          to={getProjectLink(project)}
          className="inline-flex items-center text-bengali-terracotta hover:text-bengali-red transition-colors font-medium group"
        >
          <span 
            data-lovable-editable="true"
            data-lovable-key={`project-card-${project.id}-link-text`}
            data-lovable-path={`featuredProjects.${project.id}.linkText`}
          >
            View Details
          </span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
