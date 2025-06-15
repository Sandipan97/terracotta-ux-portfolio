
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Award } from 'lucide-react';
import { ProjectFileData } from './projectData';

interface ProjectFileProps {
  file: ProjectFileData;
  index: number;
  isHovered: boolean;
}

const ProjectFile = ({ file, index, isHovered }: ProjectFileProps) => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);

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

  return (
    <motion.div
      className="relative w-64 h-72 cursor-pointer"
      onHoverStart={() => setIsFlapOpen(true)}
      onHoverEnd={() => setIsFlapOpen(false)}
      whileHover={{ 
        rotateY: 5,
        rotateX: 2,
      }}
    >
      {/* File Shadow */}
      <motion.div
        className="absolute inset-0 bg-black/20 rounded-lg blur-sm"
        style={{
          transform: 'translate(4px, 8px)',
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0.2,
          transform: isHovered ? 'translate(8px, 12px)' : 'translate(4px, 8px)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Manila Folder */}
      <motion.div
        className="relative w-full h-full rounded-lg overflow-hidden"
        style={{
          background: `linear-gradient(145deg, #F5F0E6 0%, #E8DCC0 100%)`,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.03) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(139, 69, 19, 0.02) 2px,
                rgba(139, 69, 19, 0.02) 4px
              )
            `
          }}
        />

        {/* Category Tab */}
        <motion.div
          className="absolute -top-6 right-8 px-3 py-1 rounded-t-lg text-xs font-semibold text-white"
          style={{ 
            backgroundColor: getCategoryColor(file.category),
            transform: 'perspective(100px) rotateX(-15deg)'
          }}
          animate={{
            y: isHovered ? -2 : 0,
          }}
        >
          {file.category}
        </motion.div>

        {/* Dog-eared corner */}
        <div 
          className="absolute top-0 right-0 w-8 h-8 bg-amber-200/50"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        />

        {/* File Flap */}
        <motion.div
          className="absolute top-12 left-0 right-0 h-4 bg-gradient-to-r from-amber-100 to-amber-200 border-b border-amber-300"
          style={{
            transformOrigin: 'left center',
          }}
          animate={{
            rotateY: isFlapOpen ? 35 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: isHovered ? 0.3 : 0,
            type: "spring",
            stiffness: 120,
            damping: 12
          }}
        />

        {/* Project Preview Card */}
        <motion.div
          className="absolute top-16 left-4 right-4 bottom-4 bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isFlapOpen ? 0 : 20,
            opacity: isFlapOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            delay: isFlapOpen ? 0.5 : 0,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          {/* Project Thumbnail */}
          <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <img
              src={file.image}
              alt={file.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Project Info */}
          <div className="p-3 space-y-2">
            <h3 className="font-heading text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
              {file.title}
            </h3>
            
            <p className="text-xs text-gray-600 line-clamp-2">
              {file.description}
            </p>

            {/* Project Meta */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar size={12} />
                <span>{file.duration || '3-6 months'}</span>
              </div>
              {file.results && (
                <div className="flex items-center space-x-1">
                  <Award size={12} />
                  <span className="text-bengali-red font-medium">Impact</span>
                </div>
              )}
            </div>

            {/* View Project Link */}
            <Link
              to={getProjectLink(file)}
              className="inline-flex items-center text-xs text-bengali-terracotta hover:text-bengali-red transition-colors font-medium group mt-2"
            >
              View Case Study
              <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* File edge highlighting */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectFile;
