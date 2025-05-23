
const ImplementIllustration = () => {
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
      
      {/* Rocket body */}
      <ellipse 
        cx="50" 
        cy="45" 
        rx="8" 
        ry="25" 
        fill="white" 
        opacity="0.6"
        filter="url(#glow)"
        className="animate-pulse"
      />
      <ellipse 
        cx="50" 
        cy="45" 
        rx="6" 
        ry="23" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
        filter="url(#glow)"
      />
      
      {/* Rocket nose */}
      <polygon 
        points="50,22 44,30 56,30" 
        fill="white" 
        opacity="0.8"
        filter="url(#glow)"
      />
      
      {/* Fins */}
      <polygon points="42,60 38,75 46,68" fill="white" opacity="0.7" filter="url(#glow)"/>
      <polygon points="58,60 62,75 54,68" fill="white" opacity="0.7" filter="url(#glow)"/>
      
      {/* Window */}
      <circle cx="50" cy="35" r="4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" filter="url(#glow)"/>
      <circle cx="50" cy="35" r="2" fill="white" opacity="0.6" filter="url(#glow)"/>
      
      {/* Flame/exhaust */}
      <ellipse 
        cx="50" 
        cy="75" 
        rx="6" 
        ry="12" 
        fill="white" 
        opacity="0.5"
        filter="url(#glow)"
        className="animate-bounce"
      />
      <ellipse 
        cx="50" 
        cy="78" 
        rx="4" 
        ry="8" 
        fill="white" 
        opacity="0.6"
        filter="url(#glow)"
        className="animate-bounce"
        style={{animationDelay: '0.2s'}}
      />
      <ellipse 
        cx="50" 
        cy="81" 
        rx="2" 
        ry="5" 
        fill="white" 
        opacity="0.7"
        filter="url(#glow)"
        className="animate-bounce"
        style={{animationDelay: '0.4s'}}
      />
      
      {/* Launch trail sparkles */}
      <circle cx="45" cy="85" r="1" fill="white" opacity="0.8" filter="url(#glow)" className="animate-ping"/>
      <circle cx="55" cy="88" r="1" fill="white" opacity="0.8" filter="url(#glow)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
      <circle cx="48" cy="92" r="1" fill="white" opacity="0.8" filter="url(#glow)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
      
      {/* Success indicators around */}
      <circle cx="25" cy="25" r="2" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse"/>
      <circle cx="75" cy="30" r="2" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
      <circle cx="20" cy="50" r="2" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
      <circle cx="80" cy="55" r="2" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
      
      {/* Launch platform base */}
      <rect x="35" y="68" width="30" height="3" fill="white" opacity="0.6" rx="1" filter="url(#glow)"/>
      
      {/* Motion lines */}
      <line x1="30" y1="40" x2="25" y2="35" stroke="white" strokeWidth="1.5" opacity="0.6" filter="url(#glow)"/>
      <line x1="70" y1="40" x2="75" y2="35" stroke="white" strokeWidth="1.5" opacity="0.6" filter="url(#glow)"/>
      <line x1="30" y1="50" x2="25" y2="50" stroke="white" strokeWidth="1.5" opacity="0.6" filter="url(#glow)"/>
      <line x1="70" y1="50" x2="75" y2="50" stroke="white" strokeWidth="1.5" opacity="0.6" filter="url(#glow)"/>
    </svg>
  );
};

export default ImplementIllustration;
