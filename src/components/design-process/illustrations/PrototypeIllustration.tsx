
const PrototypeIllustration = () => {
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
      
      {/* Monitor/screen */}
      <rect 
        x="20" 
        y="25" 
        width="50" 
        height="35" 
        fill="white" 
        opacity="0.3" 
        rx="3"
        filter="url(#glow)"
        className="animate-pulse"
      />
      <rect 
        x="22" 
        y="27" 
        width="46" 
        height="31" 
        fill="none" 
        stroke="white" 
        strokeWidth="2" 
        rx="2"
        filter="url(#glow)"
      />
      
      {/* Screen content - wireframe elements */}
      <rect x="26" y="32" width="12" height="6" fill="white" opacity="0.6" filter="url(#glow)"/>
      <rect x="42" y="32" width="20" height="3" fill="white" opacity="0.5" filter="url(#glow)"/>
      <rect x="42" y="37" width="16" height="3" fill="white" opacity="0.5" filter="url(#glow)"/>
      
      <rect x="26" y="44" width="36" height="8" fill="white" opacity="0.4" filter="url(#glow)"/>
      <rect x="28" y="46" width="8" height="4" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse"/>
      <rect x="38" y="46" width="8" height="4" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
      <rect x="48" y="46" width="8" height="4" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
      
      {/* Stand */}
      <rect x="43" y="60" width="4" height="8" fill="white" opacity="0.8" filter="url(#glow)"/>
      <rect x="35" y="68" width="20" height="3" fill="white" opacity="0.7" rx="1" filter="url(#glow)"/>
      
      {/* Building blocks/tools around */}
      <rect x="10" y="75" width="8" height="8" fill="white" opacity="0.6" rx="1" filter="url(#glow)"/>
      <rect x="80" y="15" width="8" height="8" fill="white" opacity="0.6" rx="1" filter="url(#glow)"/>
      <rect x="75" y="75" width="8" height="8" fill="white" opacity="0.6" rx="1" filter="url(#glow)"/>
      
      {/* Connecting lines showing iteration */}
      <path d="M 15 50 Q 10 45 15 40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" filter="url(#glow)"/>
      <path d="M 85 50 Q 90 55 85 60" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" filter="url(#glow)"/>
    </svg>
  );
};

export default PrototypeIllustration;
