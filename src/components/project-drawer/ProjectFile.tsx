
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Award, ExternalLink } from 'lucide-react';
import { ProjectFileData } from './projectData';

interface ProjectFileProps {
  file: ProjectFileData;
  index: number;
  isHovered: boolean;
}

const ProjectFile = ({ file, index, isHovered }: ProjectFileProps) => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleFileClick = () => {
    navigate(getProjectLink(file));
  };

  const handlePeekClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(getProjectLink(file));
  };

  return (
    <motion.div
      className="relative w-72 h-80 cursor-pointer select-none"
      onHoverStart={() => setIsFlapOpen(true)}
      onHoverEnd={() => setIsFlapOpen(false)}
      onClick={handleFileClick}
      whileHover={{ 
        rotateY: 3,
        rotateX: 1,
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {/* Enhanced File Shadow with depth */}
      <motion.div
        className="absolute inset-0 bg-black/25 rounded-lg blur-md"
        style={{
          transform: 'translate(6px, 10px)',
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0.25,
          transform: isHovered ? 'translate(12px, 18px)' : 'translate(6px, 10px)',
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
      />

      {/* Manila Folder with enhanced texture */}
      <motion.div
        className="relative w-full h-full rounded-lg overflow-hidden border border-amber-200/50"
        style={{
          background: `linear-gradient(145deg, #F5F0E6 0%, #E8DCC0 50%, #D4C5A0 100%)`,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 3px,
              rgba(139, 69, 19, 0.02) 3px,
              rgba(139, 69, 19, 0.02) 6px
            )
          `
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
      >
        {/* Category Tab with enhanced styling */}
        <motion.div
          className="absolute -top-8 right-12 px-4 py-2 rounded-t-lg text-xs font-bold text-white shadow-lg"
          style={{ 
            backgroundColor: getCategoryColor(file.category),
            transform: 'perspective(150px) rotateX(-20deg)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          animate={{
            y: isHovered ? -3 : 0,
            rotateX: isHovered ? -25 : -20,
          }}
          transition={{ duration: 0.3 }}
        >
          {file.category}
        </motion.div>

        {/* Enhanced dog-eared corner */}
        <div 
          className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-amber-200/60 to-amber-300/40"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
          }}
        />

        {/* Animated File Flap */}
        <motion.div
          className="absolute top-16 left-0 right-0 h-6 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 border-b-2 border-amber-300/50 shadow-sm"
          style={{
            transformOrigin: 'left center',
            backgroundImage: 'linear-gradient(90deg, rgba(139,69,19,0.03) 0%, transparent 50%, rgba(139,69,19,0.03) 100%)'
          }}
          animate={{
            rotateY: isFlapOpen ? 40 : 0,
            rotateX: isFlapOpen ? -5 : 0,
          }}
          transition={{
            duration: 0.6,
            delay: isHovered ? 0.2 : 0,
            type: "spring",
            mass: 0.8,
            stiffness: 100,
            damping: 12
          }}
        />

        {/* Enhanced Project Preview Card */}
        <motion.div
          className="absolute top-20 left-4 right-4 bottom-4 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          animate={{
            y: isFlapOpen ? 0 : 30,
            opacity: isFlapOpen ? 1 : 0,
            scale: isFlapOpen ? 1 : 0.95,
          }}
          transition={{
            duration: 0.5,
            delay: isFlapOpen ? 0.3 : 0,
            type: "spring",
            mass: 0.6,
            stiffness: 120,
            damping: 15
          }}
        >
          {/* Project Thumbnail with overlay */}
          <div className="h-28 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <img
              src={file.image}
              alt={file.title}
              className="w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
            {/* Quick action overlay */}
            <motion.div
              className="absolute inset-0 bg-bengali-terracotta/90 flex items-center justify-center opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={handlePeekClick}
                className="bg-white text-bengali-terracotta px-4 py-2 rounded-lg font-semibold text-sm flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ExternalLink size={14} />
                <span>Open Project</span>
              </button>
            </motion.div>
          </div>

          {/* Enhanced Project Info */}
          <div className="p-4 space-y-3">
            <h3 className="font-heading text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
              {file.title}
            </h3>
            
            <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
              {file.description}
            </p>

            {/* Enhanced Project Meta */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1 text-gray-500">
                <Calendar size={12} />
                <span>{file.duration || '3-6 months'}</span>
              </div>
              {file.results && (
                <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  <Award size={10} />
                  <span className="font-medium text-xs">Impact</span>
                </div>
              )}
            </div>

            {/* Enhanced View Project Link */}
            <motion.button
              onClick={handlePeekClick}
              className="w-full inline-flex items-center justify-center text-sm text-bengali-terracotta hover:text-white hover:bg-bengali-terracotta transition-all duration-300 font-semibold group mt-2 py-2 px-4 rounded-lg border-2 border-bengali-terracotta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Study
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced file edge highlighting */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        
        {/* File binding holes */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400/30 rounded-full border border-gray-500/20" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectFile;
