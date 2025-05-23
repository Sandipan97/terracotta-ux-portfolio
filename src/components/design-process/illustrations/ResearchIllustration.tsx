
const ResearchIllustration = () => {
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
      
      {/* Magnifying glass */}
      <circle 
        cx="35" 
        cy="35" 
        r="20" 
        fill="none" 
        stroke="white" 
        strokeWidth="3"
        filter="url(#glow)"
        className="animate-pulse"
      />
      
      {/* Handle */}
      <line 
        x1="52" 
        y1="52" 
        x2="70" 
        y2="70" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round"
        filter="url(#glow)"
      />
      
      {/* Document stack */}
      <rect x="10" y="60" width="25" height="30" fill="white" opacity="0.3" rx="2" filter="url(#glow)"/>
      <rect x="12" y="62" width="25" height="30" fill="white" opacity="0.5" rx="2" filter="url(#glow)"/>
      <rect x="14" y="64" width="25" height="30" fill="white" opacity="0.7" rx="2" filter="url(#glow)"/>
      
      {/* Document lines */}
      <line x1="18" y1="70" x2="32" y2="70" stroke="white" strokeWidth="1" opacity="0.8" filter="url(#glow)"/>
      <line x1="18" y1="74" x2="35" y2="74" stroke="white" strokeWidth="1" opacity="0.8" filter="url(#glow)"/>
      <line x1="18" y1="78" x2="30" y2="78" stroke="white" strokeWidth="1" opacity="0.8" filter="url(#glow)"/>
      
      {/* Search results indicators */}
      <circle cx="65" cy="25" r="2" fill="white" filter="url(#glow)" className="animate-ping"/>
      <circle cx="75" cy="35" r="2" fill="white" filter="url(#glow)" className="animate-ping" style={{animationDelay: '0.5s'}}/>
      <circle cx="70" cy="15" r="2" fill="white" filter="url(#glow)" className="animate-ping" style={{animationDelay: '1s'}}/>
    </svg>
  );
};

export default ResearchIllustration;
