
const DefineIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Pencil body */}
      <rect 
        x="25" 
        y="20" 
        width="6" 
        height="50" 
        fill="white" 
        opacity="0.9" 
        rx="3"
        filter="url(#glow)"
        className="animate-pulse"
      />
      
      {/* Pencil tip */}
      <polygon 
        points="25,70 31,70 28,78" 
        fill="white" 
        opacity="0.9"
        filter="url(#glow)"
      />
      
      {/* Eraser */}
      <rect x="24" y="15" width="8" height="8" fill="white" opacity="0.8" rx="4" filter="url(#glow)"/>
      
      {/* Paper/notepad */}
      <rect x="45" y="25" width="35" height="45" fill="white" opacity="0.3" rx="3" filter="url(#glow)"/>
      <rect x="47" y="27" width="35" height="45" fill="white" opacity="0.4" rx="3" filter="url(#glow)"/>
      
      {/* Writing lines on paper */}
      <line x1="52" y1="35" x2="72" y2="35" stroke="white" strokeWidth="1.5" opacity="0.7" filter="url(#glow)"/>
      <line x1="52" y1="40" x2="75" y2="40" stroke="white" strokeWidth="1.5" opacity="0.7" filter="url(#glow)"/>
      <line x1="52" y1="45" x2="68" y2="45" stroke="white" strokeWidth="1.5" opacity="0.7" filter="url(#glow)"/>
      <line x1="52" y1="50" x2="73" y2="50" stroke="white" strokeWidth="1.5" opacity="0.7" filter="url(#glow)"/>
      
      {/* Problem definition icon */}
      <circle cx="65" cy="60" r="8" fill="none" stroke="white" strokeWidth="2" opacity="0.8" filter="url(#glow)"/>
      <path d="M 61 60 L 65 64 L 72 57" fill="none" stroke="white" strokeWidth="2" opacity="0.9" filter="url(#glow)"/>
      
      {/* Thought bubbles */}
      <circle cx="15" cy="30" r="3" fill="white" opacity="0.6" filter="url(#glow)" className="animate-bounce"/>
      <circle cx="12" cy="22" r="2" fill="white" opacity="0.7" filter="url(#glow)"/>
      <circle cx="8" cy="18" r="1.5" fill="white" opacity="0.8" filter="url(#glow)"/>
    </svg>
  );
};

export default DefineIllustration;
