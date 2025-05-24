
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EmojiElement {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
}

const EmojiInteractiveOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [emojis] = useState<EmojiElement[]>(() => {
    // All emojis from design process backgrounds
    const emojiList = [
      '🔍', '📊', '📋', '🎤', '👥', '📝', '🗂️', // Research
      '🎯', '🧩', '📍', '🗺️', '❓', '✏️', // Define
      '📈', '🔬', '🏆', '🔍', '📑', // More Research
      '💡', '🧠', // Ideate
      '📱', '🖼️', '🎨', '📐', '💻', '🔧', // Prototype
      '🧪', '👤', '✅', '🎯', '📝', '🔍', '📊', // Test
      '🚀', '🌐', '📈', '🎉', '⭐', '📱', '🏆' // Deploy
    ];

    return emojiList.map((emoji, index) => ({
      id: index,
      emoji,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5, // 1.5x to 3.5x
      opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
    }));
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {emojis.map((emojiElement) => {
        // Calculate distance from mouse to emoji
        const deltaX = mousePosition.x - emojiElement.baseX;
        const deltaY = mousePosition.y - emojiElement.baseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Influence radius and strength
        const influenceRadius = 25;
        const maxOffset = 15;
        
        let offsetX = 0;
        let offsetY = 0;
        let scaleMultiplier = 1;
        
        if (distance < influenceRadius) {
          const influence = (influenceRadius - distance) / influenceRadius;
          offsetX = (deltaX / distance) * influence * maxOffset;
          offsetY = (deltaY / distance) * influence * maxOffset;
          scaleMultiplier = 1 + influence * 0.5;
        }

        return (
          <motion.div
            key={emojiElement.id}
            className="absolute select-none"
            style={{
              left: `${emojiElement.baseX}%`,
              top: `${emojiElement.baseY}%`,
              fontSize: `${emojiElement.size}rem`,
              opacity: emojiElement.opacity,
            }}
            animate={{
              x: offsetX,
              y: offsetY,
              scale: scaleMultiplier,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              y: { type: "spring", stiffness: 300, damping: 30 },
              scale: { type: "spring", stiffness: 300, damping: 30 },
              rotate: { 
                duration: 4 + Math.random() * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 2 
              }
            }}
          >
            {emojiElement.emoji}
          </motion.div>
        );
      })}
    </div>
  );
};

export default EmojiInteractiveOverlay;
