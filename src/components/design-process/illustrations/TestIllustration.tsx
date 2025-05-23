
const TestIllustration = () => {
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
      
      {/* Clipboard */}
      <rect 
        x="30" 
        y="15" 
        width="35" 
        height="50" 
        fill="white" 
        opacity="0.3" 
        rx="3"
        filter="url(#glow)"
      />
      <rect 
        x="32" 
        y="17" 
        width="31" 
        height="46" 
        fill="none" 
        stroke="white" 
        strokeWidth="2" 
        rx="2"
        filter="url(#glow)"
      />
      
      {/* Clip */}
      <rect x="42" y="12" width="12" height="6" fill="white" opacity="0.7" rx="2" filter="url(#glow)"/>
      
      {/* Checklist items */}
      <circle cx="38" cy="30" r="2" fill="none" stroke="white" strokeWidth="1.5" filter="url(#glow)"/>
      <path d="M 36 30 L 38 32 L 42 28" fill="none" stroke="white" strokeWidth="1.5" filter="url(#glow)" className="animate-pulse"/>
      <rect x="45" y="28" width="12" height="2" fill="white" opacity="0.6" filter="url(#glow)"/>
      
      <circle cx="38" cy="40" r="2" fill="none" stroke="white" strokeWidth="1.5" filter="url(#glow)"/>
      <path d="M 36 40 L 38 42 L 42 38" fill="none" stroke="white" strokeWidth="1.5" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
      <rect x="45" y="38" width="15" height="2" fill="white" opacity="0.6" filter="url(#glow)"/>
      
      <circle cx="38" cy="50" r="2" fill="none" stroke="white" strokeWidth="1.5" filter="url(#glow)"/>
      <rect x="45" y="48" width="10" height="2" fill="white" opacity="0.6" filter="url(#glow)"/>
      
      {/* User feedback indicators */}
      <circle cx="15" cy="25" r="3" fill="white" opacity="0.7" filter="url(#glow)"/>
      <path d="M 13 25 Q 15 22 17 25" fill="none" stroke="white" strokeWidth="1" filter="url(#glow)"/>
      
      <circle cx="80" cy="35" r="3" fill="white" opacity="0.7" filter="url(#glow)"/>
      <path d="M 78 35 Q 80 32 82 35" fill="none" stroke="white" strokeWidth="1" filter="url(#glow)"/>
      
      <circle cx="20" cy="70" r="3" fill="white" opacity="0.7" filter="url(#glow)"/>
      <path d="M 18 70 Q 20 67 22 70" fill="none" stroke="white" strokeWidth="1" filter="url(#glow)"/>
      
      {/* Validation symbols */}
      <rect x="75" y="60" width="12" height="8" fill="white" opacity="0.5" rx="2" filter="url(#glow)"/>
      <path d="M 78 64 L 81 67 L 86 62" fill="none" stroke="white" strokeWidth="2" opacity="0.9" filter="url(#glow)"/>
      
      {/* Testing arrows */}
      <path d="M 70 45 Q 75 40 70 35" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" filter="url(#glow)" className="animate-pulse"/>
    </svg>
  );
};

export default TestIllustration;
