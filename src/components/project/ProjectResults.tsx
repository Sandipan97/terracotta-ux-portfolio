
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

interface ProjectResultsProps {
  results: string;
}

const ProjectResults = ({ results }: ProjectResultsProps) => {
  return (
    <section className="py-12 xs:py-16 bg-gradient-to-br from-bengali-terracotta to-bengali-red text-white relative overflow-hidden dark-glow-medium">
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
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full dark-glow-subtle">
              <Target size={32} className="text-white" />
            </div>
          </div>
          
          <h2 
            className="font-heading text-xl xs:text-2xl md:text-3xl font-bold mb-6 xs:mb-8 text-white"
            data-lovable-editable="true"
            data-lovable-key="project-results-section-title"
            data-lovable-path="project.results.title"
          >
            Results & Impact
          </h2>
          
          <div className="bg-card/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 xs:p-8 dark-glow-card">
            <p 
              className="text-white/90 text-sm xs:text-base md:text-lg leading-relaxed"
              data-lovable-editable="true"
              data-lovable-key="project-results-content-text"
              data-lovable-path="project.results.content"
            >
              {results}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectResults;
