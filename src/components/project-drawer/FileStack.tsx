
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';
import ProjectFile from './ProjectFile';
import { ProjectFileData } from './projectData';

interface FileStackProps {
  files: ProjectFileData[];
  isDrawerOpen: boolean;
  isVisible: boolean;
}

const FileStack = ({ files, isDrawerOpen, isVisible }: FileStackProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const parallaxX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const parallaxY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) * 0.8);
    mouseY.set((e.clientY - centerY) * 0.8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  };

  const getFileRotation = (index: number) => {
    const baseRotation = Math.random() * 16 - 8; // -8° to +8°
    
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return 0; // Straighten hovered file
      const distance = Math.abs(index - hoveredIndex);
      return baseRotation + (distance * 5 * (index < hoveredIndex ? -1 : 1));
    }
    
    return baseRotation;
  };

  const getFileOffset = (index: number) => {
    const baseOffset = index * 15; // Stack spacing
    
    if (hoveredIndex !== null && index > hoveredIndex) {
      return baseOffset + 40; // Push files apart when one is lifted
    }
    
    return baseOffset;
  };

  return (
    <motion.div
      className="relative h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: parallaxX, y: parallaxY }}
    >
      {/* File Stack Container */}
      <div className="relative w-full max-w-2xl h-80">
        {files.slice(0, 4).map((file, index) => (
          <motion.div
            key={file.id}
            className="absolute"
            style={{
              zIndex: files.length - index,
              left: `${20 + index * 8}%`,
              top: `${10 + getFileOffset(index)}px`,
            }}
            initial={{ 
              opacity: 0, 
              y: 50,
              rotate: Math.random() * 16 - 8
            }}
            animate={isVisible ? {
              opacity: 1,
              y: 0,
              rotate: getFileRotation(index)
            } : {
              opacity: 0,
              y: 50,
              rotate: Math.random() * 16 - 8
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{
              y: -20,
              rotate: 0,
              scale: 1.05,
              zIndex: 100,
              transition: {
                type: "spring",
                mass: 0.7,
                stiffness: 180,
                damping: 15
              }
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <ProjectFile 
              file={file}
              index={index}
              isHovered={hoveredIndex === index}
            />
          </motion.div>
        ))}
      </div>

      {/* Stack indicator for remaining files */}
      {files.length > 4 && (
        <motion.div
          className="absolute bottom-4 right-4 bg-amber-100 dark:bg-amber-900/50 rounded-full px-4 py-2 text-sm font-medium text-amber-800 dark:text-amber-200"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
        >
          +{files.length - 4} more projects
        </motion.div>
      )}
    </motion.div>
  );
};

export default FileStack;
