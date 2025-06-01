
import { motion } from 'framer-motion';

interface FeaturedProjectsHeaderProps {
  variants: any;
}

const FeaturedProjectsHeader = ({ variants }: FeaturedProjectsHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" 
        variants={variants}
        data-lovable-editable="featured-projects-title"
      >
        Featured Projects
      </motion.h2>
      <motion.p 
        className="text-muted-foreground max-w-2xl mx-auto" 
        variants={variants}
        data-lovable-editable="featured-projects-description"
      >
        A showcase of my UX design and research work across various industries and technologies
      </motion.p>
    </div>
  );
};

export default FeaturedProjectsHeader;
