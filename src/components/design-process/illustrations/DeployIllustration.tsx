
const DeployIllustration = () => {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="white" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      
      {/* Rocket body - larger and sharper */}
      <ellipse 
        cx="60" 
        cy="50" 
        rx="12" 
        ry="30" 
        fill="url(#rocketGradient)" 
        filter="url(#glow)"
        className="animate-pulse"
      />
      <ellipse 
        cx="60" 
        cy="50" 
        rx="10" 
        ry="28" 
        fill="none" 
        stroke="white" 
        strokeWidth="3"
        filter="url(#glow)"
      />
      
      {/* Rocket nose - sharper */}
      <polygon 
        points="60,22 52,32 68,32" 
        fill="white" 
        opacity="0.9"
        filter="url(#glow)"
      />
      
      {/* Enhanced fins */}
      <polygon points="48,70 42,85 54,78" fill="white" opacity="0.8" filter="url(#glow)"/>
      <polygon points="72,70 78,85 66,78" fill="white" opacity="0.8" filter="url(#glow)"/>
      
      {/* Larger window */}
      <circle cx="60" cy="40" r="6" fill="none" stroke="white" strokeWidth="2.5" opacity="0.9" filter="url(#glow)"/>
      <circle cx="60" cy="40" r="3.5" fill="white" opacity="0.7" filter="url(#glow)" className="animate-pulse"/>
      
      {/* Enhanced flame/exhaust with more animation */}
      <ellipse 
        cx="60" 
        cy="85" 
        rx="10" 
        ry="18" 
        fill="white" 
        opacity="0.6"
        filter="url(#glow)"
        className="animate-bounce"
      />
      <ellipse 
        cx="60" 
        cy="90" 
        rx="7" 
        ry="12" 
        fill="white" 
        opacity="0.7"
        filter="url(#glow)"
        className="animate-bounce"
        style={{animationDelay: '0.2s'}}
      />
      <ellipse 
        cx="60" 
        cy="95" 
        rx="4" 
        ry="8" 
        fill="white" 
        opacity="0.8"
        filter="url(#glow)"
        className="animate-bounce"
        style={{animationDelay: '0.4s'}}
      />
      
      {/* Enhanced launch trail sparkles */}
      <circle cx="50" cy="100" r="2" fill="white" opacity="0.9" filter="url(#glow)" className="animate-ping"/>
      <circle cx="70" cy="105" r="2" fill="white" opacity="0.9" filter="url(#glow)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
      <circle cx="55" cy="110" r="2" fill="white" opacity="0.9" filter="url(#glow)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
      <circle cx="65" cy="115" r="1.5" fill="white" opacity="0.8" filter="url(#glow)" className="animate-ping" style={{animationDelay: '0.9s'}}/>
      
      {/* Enhanced success indicators around */}
      <circle cx="25" cy="25" r="3" fill="white" opacity="0.8" filter="url(#glow)" className="animate-pulse"/>
      <circle cx="95" cy="30" r="3" fill="white" opacity="0.8" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
      <circle cx="15" cy="55" r="2.5" fill="white" opacity="0.8" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
      <circle cx="105" cy="60" r="2.5" fill="white" opacity="0.8" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
      
      {/* Launch platform base */}
      <rect x="40" y="78" width="40" height="4" fill="white" opacity="0.7" rx="2" filter="url(#glow)"/>
      
      {/* Enhanced motion lines */}
      <line x1="20" y1="45" x2="12" y2="38" stroke="white" strokeWidth="2.5" opacity="0.7" filter="url(#glow)" className="animate-pulse"/>
      <line x1="100" y1="45" x2="108" y2="38" stroke="white" strokeWidth="2.5" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
      <line x1="20" y1="55" x2="12" y2="55" stroke="white" strokeWidth="2.5" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
      <line x1="100" y1="55" x2="108" y2="55" stroke="white" strokeWidth="2.5" opacity="0.7" filter="url(#glow)" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
      
      {/* Deployment success stars */}
      <g className="animate-spin" style={{transformOrigin: '30px 20px', animationDuration: '4s'}}>
        <polygon points="30,15 32,20 37,20 33,23 35,28 30,25 25,28 27,23 23,20 28,20" fill="white" opacity="0.8" filter="url(#glow)"/>
      </g>
      <g className="animate-spin" style={{transformOrigin: '90px 25px', animationDuration: '3s', animationDirection: 'reverse'}}>
        <polygon points="90,20 92,25 97,25 93,28 95,33 90,30 85,33 87,28 83,25 88,25" fill="white" opacity="0.8" filter="url(#glow)"/>
      </g>
    </svg>
  );
};

export default DeployIllustration;
