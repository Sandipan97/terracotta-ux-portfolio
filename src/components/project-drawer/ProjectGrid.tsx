
import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Award, ArrowRight } from 'lucide-react';
import { ProjectFileData } from './projectData';

interface ProjectGridProps {
  files: ProjectFileData[];
  isVisible: boolean;
}

const ProjectGrid = ({ files, isVisible }: ProjectGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<ProjectFileData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll to top smoothly when navigating to project pages
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Listen for route changes to scroll to top
    const handleRouteChange = () => {
      scrollToTop();
    };

    return () => {
      // Cleanup if needed
    };
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'UX': return '#0EA5E9';
      case 'UI': return '#F59E0B';
      case 'Research': return '#8B5CF6';
      case 'Design Systems': return '#10B981';
      case 'AR Projects': return '#EF4444';
      case 'Product Design': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getProjectLink = (file: ProjectFileData) => {
    if (file.slug) {
      return `/projects/${file.slug}`;
    }
    return `/projects/${file.id}`;
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouchDevice) return;
    
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  }, [isTouchDevice]);

  const handleProjectHover = (file: ProjectFileData | null) => {
    if (isTouchDevice) return;
    setHoveredProject(file);
  };

  const handleProjectClick = (file: ProjectFileData) => {
    const projectPath = getProjectLink(file);
    
    // Navigate to the project page
    navigate(projectPath);
    
    // Smooth scroll to top after a short delay to ensure navigation is complete
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  // Detect touch device
  const handleTouchStart = () => {
    setIsTouchDevice(true);
  };

  return (
    <motion.div
      ref={gridRef}
      className="relative max-w-6xl mx-auto"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      initial={{ y: 60, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
      transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {files.map((file, index) => (
          <motion.div
            key={file.id}
            className="project-card group cursor-pointer"
            data-color-theme={file.slug || file.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.9 + index * 0.1,
              type: "spring",
              stiffness: 120,
              damping: 15
            }}
            onClick={() => handleProjectClick(file)}
            onMouseEnter={() => handleProjectHover(file)}
            onMouseLeave={() => handleProjectHover(null)}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)' // GPU acceleration
            }}
          >
            {/* Project Card */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-400"
              style={{
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
              }}
            >
              {/* Category Badge */}
              <div 
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10"
                style={{ backgroundColor: getCategoryColor(file.category) }}
              >
                {file.category}
              </div>

              {/* Project Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                <img
                  src={file.image}
                  alt={file.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100 line-clamp-2 leading-tight group-hover:text-current transition-colors duration-300">
                  {file.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {file.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Calendar size={12} />
                    <span>{file.duration || '3-6 months'}</span>
                  </div>
                  {file.results && (
                    <div className="flex items-center space-x-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                      <Award size={10} />
                      <span className="font-medium text-xs">Impact</span>
                    </div>
                  )}
                </div>

                {/* View Project Button */}
                <motion.div
                  className="inline-flex items-center text-sm text-bengali-terracotta hover:text-white hover:bg-bengali-terracotta transition-all duration-300 font-semibold group/btn py-2 px-4 rounded-md border border-bengali-terracotta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <ArrowRight size={12} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Hover Preview */}
      {hoveredProject && !isTouchDevice && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 30,
            top: mousePosition.y - 150,
            willChange: 'transform, opacity'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <div 
            className="w-80 h-60 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border-2"
            style={{ 
              borderColor: getCategoryColor(hoveredProject.category),
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Preview Thumbnail */}
            <div className="h-32 relative overflow-hidden">
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Preview Content */}
            <div className="p-4 space-y-2">
              <h4 className="font-heading text-sm font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
                {hoveredProject.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
                {hoveredProject.description}
              </p>
              {hoveredProject.results && (
                <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
                  <Award size={10} />
                  <span>{hoveredProject.results}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Projects count indicator */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 shadow-md">
          <span>📁</span>
          <span>{files.length} Projects Available</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectGrid;
