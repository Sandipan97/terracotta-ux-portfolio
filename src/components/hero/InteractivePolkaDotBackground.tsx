
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
        
        // Add ripple effect
        const newRipple: RippleEffect = {
          id: Date.now(),
          x,
          y,
          timestamp: Date.now()
        };
        setRipples(prev => [...prev, newRipple]);
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
      setRipples(prev => prev.filter(ripple => now - ripple.timestamp < 2000));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

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
      {/* Ripple effects that move towards View My Work button */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border border-bengali-terracotta/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ 
            scale: 15,
            opacity: 0,
            x: window.innerWidth < 768 ? 0 : -200, // Move towards button area
            y: 150, // Move towards button area
          }}
          transition={{ 
            duration: 2, 
            ease: "easeOut" 
          }}
        />
      ))}
    </div>
  );
};

export default InteractivePolkaDotBackground;
