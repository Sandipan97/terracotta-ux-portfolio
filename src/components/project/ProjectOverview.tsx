
import { motion } from 'framer-motion';

type Project = {
  overview?: string;
  challenge?: string;
  solution?: string;
};

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-bengali-mustard/5 filter blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }} 
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-bengali-terracotta/5 filter blur-2xl" 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }} 
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {project.overview && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground text-sm xs:text-base leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.challenge && (
              <motion.div 
                className="bg-background/60 backdrop-blur-sm p-4 xs:p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-2 h-8 bg-bengali-terracotta rounded-full mr-3"></div>
                  The Challenge
                </h3>
                <p className="text-muted-foreground text-sm xs:text-base leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
            )}
            
            {project.solution && (
              <motion.div 
                className="bg-background/60 backdrop-blur-sm p-4 xs:p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-2 h-8 bg-bengali-mustard rounded-full mr-3"></div>
                  The Solution
                </h3>
                <p className="text-muted-foreground text-sm xs:text-base leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
