
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InteractivePolkaDotBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);

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
      className="absolute inset-0 z-0 overflow-hidden"
    >
      {/* Parallax animated circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-bengali-mustard/20 to-bengali-terracotta/10 blur-3xl"
        style={{
          top: '10%',
          left: '5%',
          y: y1,
        }}
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 100, damping: 20 },
          y: { type: "spring", stiffness: 100, damping: 20 },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-bengali-mustard/25 blur-2xl"
        style={{
          top: '60%',
          right: '10%',
          y: y2,
        }}
        animate={{
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 80, damping: 25 },
          y: { type: "spring", stiffness: 80, damping: 25 },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />

      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-bengali-terracotta/25 to-bengali-red/15 blur-xl"
        style={{
          top: '30%',
          left: '70%',
          y: y3,
        }}
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
          scale: [1, 0.9, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 120, damping: 15 },
          y: { type: "spring", stiffness: 120, damping: 15 },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-16 h-16 bg-bengali-mustard/30 rotate-45"
        style={{
          top: '20%',
          left: '20%',
          y: y1,
        }}
        animate={{
          rotate: [45, 90, 45],
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 150, damping: 20 },
          y: { type: "spring", stiffness: 150, damping: 20 },
        }}
      />

      <motion.div
        className="absolute w-12 h-12 bg-bengali-terracotta/40 rounded-full"
        style={{
          top: '70%',
          left: '30%',
          y: y2,
        }}
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
          scale: [1, 1.3, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 100, damping: 20 },
          y: { type: "spring", stiffness: 100, damping: 20 },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="absolute w-8 h-20 bg-bengali-red/35 rounded-full"
        style={{
          top: '50%',
          right: '30%',
          y: y3,
        }}
        animate={{
          rotate: [0, 360],
          x: mousePosition.x * 0.025,
          y: mousePosition.y * 0.025,
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 90, damping: 25 },
          y: { type: "spring", stiffness: 90, damping: 25 },
        }}
      />
    </div>
  );
};

export default InteractivePolkaDotBackground;
