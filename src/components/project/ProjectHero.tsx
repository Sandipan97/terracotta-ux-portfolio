
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  duration?: string;
  role?: string;
  projectType?: string[];
};

interface ProjectHeroProps {
  project: Project;
  onBack: () => void;
  onScrollToContent: () => void;
}

const ProjectHero = ({ project, onBack, onScrollToContent }: ProjectHeroProps) => {
  // Override project data for P&G Research Razor project
  const projectData = project.id === 1 ? {
    ...project,
    title: "P&G Research Razor – UX/UI Redesign",
    description: "A comprehensive UX redesign of P&G's Datalogger application used in industrial and research environments. The goal was to enhance usability, accessibility, and security through heuristic evaluation, user-centered design, and modern UI practices.",
    client: "Procter & Gamble",
    duration: "3 Months",
    role: "Lead UX/UI Designer & Researcher",
    projectType: ["UX Research", "UI Design", "Accessibility", "Industrial Design"]
  } : project;

  return (
    <>
      {/* Hero Image Section */}
      <section className="w-full relative h-[40vh] xs:h-[45vh] md:h-[50vh] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl" 
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
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-slate-500/10 filter blur-xl" 
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

        {/* Back button */}
        <motion.div 
          className="absolute top-4 left-4 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button 
            onClick={onBack}
            variant="secondary" 
            className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-blue-600 transition-all duration-300 border border-border/50 dark-glow-container"
            size="icon"
          >
            <ArrowLeft size={20} />
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <EditableImage 
            src="/placeholder.svg" 
            alt="P&G Research Razor Datalogger Interface"
            className="w-full h-full object-cover dark-glow-image"
            fallbackSrc="/placeholder.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
        </motion.div>
      </section>

      {/* Information Banner Section */}
      <section className="w-full bg-background/95 backdrop-blur-sm py-8 xs:py-10 md:py-12 border-b border-border/30 relative overflow-hidden dark-glow-subtle">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0,161,223)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Project Type Chips */}
            {projectData.projectType && (
              <div className="flex flex-wrap gap-2 mb-4 xs:mb-6 justify-center md:justify-start">
                {projectData.projectType.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <Badge 
                      className="bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-blue-500/20 dark-glow-subtle"
                      data-lovable-editable="true"
                      data-lovable-key={`project-type-${index}`}
                    >
                      {type}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Project Title */}
            <motion.h1 
              className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-6 text-foreground text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              data-lovable-editable="true"
              data-lovable-key="project-hero-title"
            >
              {projectData.title}
            </motion.h1>
            
            {/* Project Description */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg mb-6 xs:mb-8 text-muted-foreground text-center md:text-left max-w-4xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              data-lovable-editable="true"
              data-lovable-key="project-hero-description"
            >
              {projectData.description}
            </motion.p>
            
            {/* Project Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 mb-8 xs:mb-10">
              {projectData.client && (
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-4 xs:p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 dark-glow-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 
                    className="text-blue-600 text-xs xs:text-sm font-medium mb-1 xs:mb-2 uppercase tracking-wide"
                    data-lovable-editable="true"
                    data-lovable-key="project-client-label"
                  >
                    Client
                  </h3>
                  <p 
                    className="font-semibold text-sm xs:text-base text-foreground"
                    data-lovable-editable="true"
                    data-lovable-key="project-client-value"
                  >
                    {projectData.client}
                  </p>
                </motion.div>
              )}
              
              {projectData.duration && (
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-4 xs:p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 dark-glow-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 
                    className="text-blue-600 text-xs xs:text-sm font-medium mb-1 xs:mb-2 uppercase tracking-wide"
                    data-lovable-editable="true"
                    data-lovable-key="project-duration-label"
                  >
                    Duration
                  </h3>
                  <p 
                    className="font-semibold text-sm xs:text-base text-foreground"
                    data-lovable-editable="true"
                    data-lovable-key="project-duration-value"
                  >
                    {projectData.duration}
                  </p>
                </motion.div>
              )}
              
              {projectData.role && (
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-4 xs:p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1 dark-glow-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 
                    className="text-blue-600 text-xs xs:text-sm font-medium mb-1 xs:mb-2 uppercase tracking-wide"
                    data-lovable-editable="true"
                    data-lovable-key="project-role-label"
                  >
                    My Role
                  </h3>
                  <p 
                    className="font-semibold text-sm xs:text-base text-foreground"
                    data-lovable-editable="true"
                    data-lovable-key="project-role-value"
                  >
                    {projectData.role}
                  </p>
                </motion.div>
              )}
            </div>
            
            {/* CTA Button */}
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Button 
                onClick={onScrollToContent}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 dark-glow-container"
                size="lg"
                data-lovable-editable="true"
                data-lovable-key="project-cta-button"
              >
                View Design Process <ChevronDown className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectHero;
