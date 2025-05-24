
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface RippleEffect {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const InteractivePolkaDotBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create multiple ripples for water-like effect
        const baseId = Date.now();
        const newRipples: RippleEffect[] = [];
        
        // Create 3 concentric ripples with slight delays
        for (let i = 0; i < 3; i++) {
          newRipples.push({
            id: baseId + i,
            x,
            y,
            timestamp: Date.now() + (i * 200) // Stagger the ripples
          });
        }
        
        setRipples(prev => [...prev, ...newRipples]);
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

  // Clean up old ripples
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(ripple => now - ripple.timestamp < 3000));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  // Calculate direction towards View My Work button
  const getButtonDirection = (startX: number, startY: number) => {
    const buttonX = window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth * 0.25;
    const buttonY = window.innerHeight * 0.7;
    
    const deltaX = buttonX - startX;
    const deltaY = buttonY - startY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    return {
      x: (deltaX / distance) * 100,
      y: (deltaY / distance) * 100
    };
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, 
          rgba(107, 114, 128, 0.3) 1px, 
          transparent 0)`,
        backgroundSize: '15px 15px'
      }}
    >
      {/* Water-like ripple effects */}
      {ripples.map((ripple, index) => {
        const direction = getButtonDirection(ripple.x, ripple.y);
        const delay = (ripple.id % 3) * 0.2; // Stagger delay for concentric effect
        
        return (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border border-bengali-terracotta/20"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              scale: 0, 
              opacity: 0.6 - (delay * 0.2),
              borderWidth: 2 - delay
            }}
            animate={{ 
              scale: [0, 8, 15, 20],
              opacity: [0.6 - (delay * 0.2), 0.4, 0.2, 0],
              x: direction.x,
              y: direction.y,
              borderWidth: [2 - delay, 1, 0.5, 0]
            }}
            transition={{ 
              duration: 2.5,
              delay: delay,
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1]
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractivePolkaDotBackground;
