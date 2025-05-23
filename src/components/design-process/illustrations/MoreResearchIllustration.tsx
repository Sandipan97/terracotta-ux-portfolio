
const MoreResearchIllustration = () => {
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
      
      {/* Enhanced magnifying glass */}
      <circle 
        cx="40" 
        cy="40" 
        r="18" 
        fill="none" 
        stroke="white" 
        strokeWidth="3"
        filter="url(#glow)"
        className="animate-pulse"
      />
      
      {/* Handle */}
      <line 
        x1="55" 
        y1="55" 
        x2="70" 
        y2="70" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round"
        filter="url(#glow)"
      />
      
      {/* Plus sign in magnifying glass */}
      <line x1="35" y1="40" x2="45" y2="40" stroke="white" strokeWidth="2" filter="url(#glow)"/>
      <line x1="40" y1="35" x2="40" y2="45" stroke="white" strokeWidth="2" filter="url(#glow)"/>
      
      {/* Multiple data sources */}
      <rect x="10" y="15" width="20" height="15" fill="white" opacity="0.5" rx="2" filter="url(#glow)"/>
      <rect x="5" y="35" width="20" height="15" fill="white" opacity="0.6" rx="2" filter="url(#glow)"/>
      <rect x="15" y="55" width="20" height="15" fill="white" opacity="0.7" rx="2" filter="url(#glow)"/>
      
      {/* Data points/connections */}
      <circle cx="75" cy="20" r="2" fill="white" opacity="0.8" filter="url(#glow)"/>
      <circle cx="85" cy="30" r="2" fill="white" opacity="0.8" filter="url(#glow)"/>
      <circle cx="80" cy="40" r="2" fill="white" opacity="0.8" filter="url(#glow)"/>
      
      {/* Connection lines */}
      <line x1="75" y1="20" x2="80" y2="25" stroke="white" strokeWidth="1" opacity="0.7" filter="url(#glow)"/>
      <line x1="80" y1="25" x2="85" y2="30" stroke="white" strokeWidth="1" opacity="0.7" filter="url(#glow)"/>
      <line x1="85" y1="30" x2="80" y2="35" stroke="white" strokeWidth="1" opacity="0.7" filter="url(#glow)"/>
      <line x1="80" y1="35" x2="80" y2="40" stroke="white" strokeWidth="1" opacity="0.7" filter="url(#glow)"/>
      
      {/* Research notes indicator */}
      <path d="M 70 80 Q 75 75 80 80 Q 85 85 90 80" fill="none" stroke="white" strokeWidth="2" opacity="0.8" filter="url(#glow)" className="animate-pulse"/>
    </svg>
  );
};

export default MoreResearchIllustration;
