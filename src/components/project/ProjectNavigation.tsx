
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
};

interface ProjectNavigationProps {
  nextProject: Project;
}

const ProjectNavigation = ({ nextProject }: ProjectNavigationProps) => {
  return (
    <section className="py-8 xs:py-12 bg-muted/30 dark:bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col xs:flex-row justify-between items-center">
          <motion.div
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.98 }}
            className="mb-4 xs:mb-0"
          >
            <Link to="/projects" className="flex items-center text-bengali-terracotta dark:text-bengali-terracotta-light hover:text-bengali-red transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to={`/projects/${nextProject.id}`}
              className="flex items-center group"
            >
              <div className="text-right mr-4">
                <div className="text-xs xs:text-sm text-muted-foreground">Next Project</div>
                <div className="font-medium text-sm xs:text-base text-foreground group-hover:text-bengali-terracotta dark:group-hover:text-bengali-terracotta-light transition-colors">
                  {nextProject.title.length > 20 ? `${nextProject.title.substring(0, 20)}...` : nextProject.title}
                </div>
              </div>
              <ArrowRight size={16} className="text-bengali-terracotta dark:text-bengali-terracotta-light group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
