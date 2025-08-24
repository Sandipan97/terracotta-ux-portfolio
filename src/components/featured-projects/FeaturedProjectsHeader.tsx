
import { motion } from 'framer-motion';

const FeaturedProjectsHeader = ({ variants }: { variants: any }) => {
  return (
    <motion.div 
      className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
      variants={variants}
    >
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 lg:mb-8">
        Featured Projects
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
        A showcase of my design work across various industries and platforms
      </p>
    </motion.div>
  );
};

export default FeaturedProjectsHeader;
