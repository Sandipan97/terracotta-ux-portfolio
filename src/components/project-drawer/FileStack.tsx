
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
    const baseRotation = (Math.sin(index * 0.5) * 8) + (Math.cos(index * 0.3) * 4); // Natural variation
    
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return 0; // Straighten hovered file
      const distance = Math.abs(index - hoveredIndex);
      const direction = index < hoveredIndex ? -1 : 1;
      return baseRotation + (distance * 3 * direction);
    }
    
    return baseRotation;
  };

  const getFileOffset = (index: number) => {
    const baseOffset = index * 8; // Tighter stack spacing
    
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return baseOffset - 5; // Lift the hovered file
      if (index > hoveredIndex) return baseOffset + 25; // Push files apart
    }
    
    return baseOffset;
  };

  const getZIndex = (index: number) => {
    if (hoveredIndex !== null && index === hoveredIndex) {
      return 100; // Bring hovered file to front
    }
    return files.length - index;
  };

  // Show all files, not just first 4
  const visibleFiles = files;

  return (
    <motion.div
      className="relative h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: parallaxX, y: parallaxY }}
    >
      {/* File Stack Container */}
      <div className="relative w-full max-w-4xl h-96">
        {visibleFiles.map((file, index) => (
          <motion.div
            key={file.id}
            className="absolute"
            style={{
              zIndex: getZIndex(index),
              left: `${15 + (index % 3) * 12}%`, // Arrange in layers across width
              top: `${20 + getFileOffset(index)}px`,
            }}
            initial={{ 
              opacity: 0, 
              y: 80,
              rotate: getFileRotation(index),
              scale: 0.9
            }}
            animate={isVisible ? {
              opacity: 1,
              y: 0,
              rotate: getFileRotation(index),
              scale: 1
            } : {
              opacity: 0,
              y: 80,
              rotate: getFileRotation(index),
              scale: 0.9
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              mass: 0.7,
              stiffness: 120,
              damping: 15
            }}
            whileHover={{
              y: -25,
              rotate: 0,
              scale: 1.08,
              transition: {
                type: "spring",
                mass: 0.5,
                stiffness: 200,
                damping: 12
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

      {/* Stack depth indicator */}
      <motion.div
        className="absolute bottom-6 right-8 bg-amber-100/90 dark:bg-amber-900/60 rounded-full px-4 py-2 text-sm font-medium text-amber-800 dark:text-amber-200 backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
      >
        📁 {files.length} Project Files
      </motion.div>
    </motion.div>
  );
};

export default FileStack;
