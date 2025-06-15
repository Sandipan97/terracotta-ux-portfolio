
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
    
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  };

  // Stack files on top of each other with slight offsets
  const getFilePosition = (index: number) => {
    const stackOffset = index * 8; // Small offset for depth
    const randomX = (Math.sin(index * 1.7) * 15); // Slight random positioning
    const randomY = (Math.cos(index * 2.3) * 12);
    
    return {
      x: 50 + randomX, // Center the stack with slight variation
      y: 50 + stackOffset + randomY, // Stack vertically with depth
      z: -index * 2, // Depth for perspective
    };
  };

  const getFileRotation = (index: number) => {
    const baseRotation = (Math.sin(index * 0.7) * 4) + (index % 2 === 0 ? 1 : -1) * 2;
    
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return 0; // Straighten hovered file
      const distance = Math.abs(index - hoveredIndex);
      return baseRotation + (distance > 2 ? baseRotation * 0.5 : baseRotation);
    }
    
    return baseRotation;
  };

  const getZIndex = (index: number) => {
    if (hoveredIndex !== null && index === hoveredIndex) {
      return 100; // Bring hovered file to front
    }
    return files.length - index;
  };

  const getFileScale = (index: number) => {
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) return 1.0; // Keep hovered file normal size
      const distance = Math.abs(index - hoveredIndex);
      return 0.98 - (distance * 0.01); // Slightly shrink nearby files
    }
    return 0.98 - (index * 0.005); // Natural depth scaling
  };

  return (
    <motion.div
      className="relative h-full flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        x: parallaxX, 
        y: parallaxY,
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* File Stack Container with Perspective */}
      <div className="relative w-full h-[500px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {files.map((file, index) => {
          const position = getFilePosition(index);
          
          return (
            <motion.div
              key={file.id}
              className="absolute"
              style={{
                zIndex: getZIndex(index),
                left: `${position.x}px`,
                top: `${position.y}px`,
                transformStyle: 'preserve-3d'
              }}
              initial={{ 
                opacity: 0, 
                y: 60,
                rotateX: 45,
                rotateZ: getFileRotation(index),
                scale: 0.8
              }}
              animate={isVisible ? {
                opacity: 1,
                y: 0,
                rotateX: 15, // Slight tilt for top-down perspective
                rotateZ: getFileRotation(index),
                scale: getFileScale(index)
              } : {
                opacity: 0,
                y: 60,
                rotateX: 45,
                rotateZ: getFileRotation(index),
                scale: 0.8
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                mass: 0.7,
                stiffness: 120,
                damping: 15
              }}
              whileHover={{
                y: -20,
                rotateX: 5,
                rotateZ: 0,
                scale: 1.05,
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
          );
        })}
      </div>

      {/* Stack depth indicator */}
      <motion.div
        className="absolute bottom-4 right-4 bg-slate-700/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-slate-200 shadow-lg border border-slate-600/50"
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
