
import { motion } from 'framer-motion';

interface ProjectResultsProps {
  results: string;
}

const ProjectResults = ({ results }: ProjectResultsProps) => {
  return (
    <section className="py-12 xs:py-16 bg-gradient-to-br from-bengali-terracotta to-bengali-red text-white relative overflow-hidden">
      {/* Animated background elements */}
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-xl xs:text-2xl md:text-3xl font-bold mb-6 xs:mb-8">
            Results & Impact
          </h2>
          <p className="text-white/90 text-sm xs:text-base md:text-lg max-w-3xl mx-auto">
            {results}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectResults;
