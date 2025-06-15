
import { motion } from 'framer-motion';
import { useState } from 'react';

interface DrawerHandleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DrawerHandle = ({ isOpen, onToggle }: DrawerHandleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({ x, y });
  };

  const proximityGlow = isHovered ? {
    boxShadow: `
      0 0 20px rgba(168, 162, 158, 0.6),
      0 0 40px rgba(168, 162, 158, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2)
    `
  } : {};

  return (
    <motion.div
      className="absolute -top-6 left-1/2 transform -translate-x-1/2 cursor-grab active:cursor-grabbing z-20"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onToggle}
    >
      {/* Brushed Metal Handle */}
      <motion.div
        className="w-32 h-6 rounded-full relative overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg, 
              #C0C0C0 0%, 
              #A8A2A2 20%, 
              #D3D3D3 40%, 
              #A8A2A2 60%, 
              #C0C0C0 80%, 
              #808080 100%
            )
          `,
          ...proximityGlow
        }}
        animate={{
          rotateX: isHovered ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Brushed texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 2px,
              rgba(0,0,0,0.1) 3px,
              transparent 4px
            )`
          }}
        />
        
        {/* Proximity glow effect */}
        {isHovered && (
          <motion.div
            className="absolute rounded-full bg-white/20"
            style={{
              width: '40px',
              height: '40px',
              left: cursorPosition.x - 20,
              top: cursorPosition.y - 20,
              filter: 'blur(10px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
        )}

        {/* Handle grip lines */}
        <div className="absolute inset-0 flex items-center justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-3 bg-black/20 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Handle shadow */}
      <div 
        className="absolute top-6 left-0 w-full h-2 bg-black/20 rounded-full blur-sm"
        style={{
          transform: `scale(${isHovered ? 1.1 : 1})`,
          transition: 'transform 0.2s ease'
        }}
      />
    </motion.div>
  );
};

export default DrawerHandle;
