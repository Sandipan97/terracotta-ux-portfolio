
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
    <section className="py-8 xs:py-12 bg-muted/20 relative overflow-hidden dark-glow-subtle">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(249,211,66)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col xs:flex-row justify-between items-center gap-4">
          <motion.div
            whileHover={{ x: -3, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mb-4 xs:mb-0"
          >
            <Link 
              to="/projects" 
              className="flex items-center bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 text-bengali-terracotta hover:text-bengali-red hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl dark-glow-container"
            >
              <ArrowLeft size={16} className="mr-2" /> 
              Back to Projects
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ x: 3, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to={`/projects/${nextProject.id}`}
              className="flex items-center group bg-bengali-terracotta/10 backdrop-blur-sm px-4 py-2 rounded-full border border-bengali-terracotta/30 hover:bg-bengali-terracotta hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl dark-glow-container"
            >
              <div className="text-right mr-4">
                <div className="text-xs xs:text-sm text-muted-foreground group-hover:text-white/80">Next Project</div>
                <div className="font-medium text-sm xs:text-base text-foreground group-hover:text-white transition-colors">
                  {nextProject.title.length > 20 ? `${nextProject.title.substring(0, 20)}...` : nextProject.title}
                </div>
              </div>
              <ArrowRight size={16} className="text-bengali-terracotta group-hover:text-white group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
