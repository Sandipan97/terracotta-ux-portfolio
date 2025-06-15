
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
      className="relative w-60 h-72 cursor-pointer select-none"
      onHoverStart={() => setIsFlapOpen(true)}
      onHoverEnd={() => setIsFlapOpen(false)}
      onClick={handleFileClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* File Shadow */}
      <motion.div
        className="absolute inset-0 bg-black/30 rounded-lg blur-sm"
        style={{
          transform: 'translate(4px, 8px) rotateX(90deg) translateZ(-10px)',
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0.2,
          transform: isHovered 
            ? 'translate(8px, 15px) rotateX(90deg) translateZ(-10px) scale(1.1)' 
            : 'translate(4px, 8px) rotateX(90deg) translateZ(-10px)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Manila File Folder */}
      <motion.div
        className="relative w-full h-full rounded-lg overflow-hidden border border-amber-200/30"
        style={{
          background: `linear-gradient(145deg, #F5F0E6 0%, #E8DCC0 50%, #D4C5A0 100%)`,
          backgroundImage: `
            linear-gradient(90deg, rgba(139, 69, 19, 0.03) 50%, transparent 50%),
            linear-gradient(0deg, rgba(139, 69, 19, 0.02) 50%, transparent 50%)
          `,
          backgroundSize: '8px 8px, 12px 12px',
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateY: isHovered ? 2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
      >
        {/* Category Tab */}
        <motion.div
          className="absolute -top-6 right-8 px-3 py-1 rounded-t-md text-xs font-bold text-white shadow-md z-10"
          style={{ 
            backgroundColor: getCategoryColor(file.category),
            transform: 'rotateX(-20deg)',
          }}
          animate={{
            y: isHovered ? -2 : 0,
            rotateX: isHovered ? -30 : -20,
          }}
          transition={{ duration: 0.3 }}
        >
          {file.category}
        </motion.div>

        {/* File Corner Fold */}
        <div 
          className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-amber-200/40 to-amber-300/30"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
          }}
        />

        {/* File Opening Animation */}
        <motion.div
          className="absolute top-12 left-0 right-0 h-5 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 border-b border-amber-300/40"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: isFlapOpen ? 25 : 0,
            rotateX: isFlapOpen ? -8 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: isHovered ? 0.1 : 0,
            type: "spring",
            mass: 0.8,
            stiffness: 100,
            damping: 12
          }}
        />

        {/* Project Preview Card */}
        <motion.div
          className="absolute top-16 left-3 right-3 bottom-3 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{
            y: isFlapOpen ? 0 : 20,
            opacity: isFlapOpen ? 1 : 0,
            scale: isFlapOpen ? 1 : 0.95,
            rotateX: isFlapOpen ? 0 : 15,
          }}
          transition={{
            duration: 0.4,
            delay: isFlapOpen ? 0.2 : 0,
            type: "spring",
            mass: 0.6,
            stiffness: 120,
            damping: 15
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Project Thumbnail */}
          <div className="h-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <img
              src={file.image}
              alt={file.title}
              className="w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Project Info */}
          <div className="p-3 space-y-2">
            <h3 className="font-heading text-xs font-bold text-gray-900 line-clamp-2 leading-tight">
              {file.title}
            </h3>
            
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {file.description}
            </p>

            {/* Project Meta */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1 text-gray-500">
                <Calendar size={10} />
                <span>{file.duration || '3-6 months'}</span>
              </div>
              {file.results && (
                <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded-full">
                  <Award size={8} />
                  <span className="font-medium text-xs">Impact</span>
                </div>
              )}
            </div>

            {/* View Project Button */}
            <motion.button
              onClick={handlePeekClick}
              className="w-full inline-flex items-center justify-center text-xs text-bengali-terracotta hover:text-white hover:bg-bengali-terracotta transition-all duration-300 font-semibold group py-1.5 px-3 rounded-md border border-bengali-terracotta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project
              <ArrowRight size={10} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* File Edge Highlighting */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectFile;
