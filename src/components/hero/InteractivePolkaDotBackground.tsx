
import { useRef } from 'react';

const InteractivePolkaDotBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    />
  );
};

export default InteractivePolkaDotBackground;
