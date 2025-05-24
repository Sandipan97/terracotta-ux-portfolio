
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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
              <p className="text-muted-foreground text-sm xs:text-base">
                {project.overview}
              </p>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.challenge && (
              <motion.div 
                className="bg-card p-4 xs:p-6 rounded-lg border border-border shadow-md backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-4">
                  The Challenge
                </h3>
                <p className="text-muted-foreground text-sm xs:text-base">
                  {project.challenge}
                </p>
              </motion.div>
            )}
            
            {project.solution && (
              <motion.div 
                className="bg-card p-4 xs:p-6 rounded-lg border border-border shadow-md backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-4">
                  The Solution
                </h3>
                <p className="text-muted-foreground text-sm xs:text-base">
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
