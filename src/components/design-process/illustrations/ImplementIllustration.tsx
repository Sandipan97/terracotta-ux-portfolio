
const ImplementIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Rocket body */}
      <ellipse 
        cx="50" 
        cy="45" 
        rx="8" 
        ry="25" 
        fill="currentColor" 
        opacity="0.3"
        className="animate-pulse"
      />
      <ellipse 
        cx="50" 
        cy="45" 
        rx="6" 
        ry="23" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      
      {/* Rocket nose */}
      <polygon 
        points="50,22 44,30 56,30" 
        fill="currentColor" 
        opacity="0.5"
      />
      
      {/* Fins */}
      <polygon points="42,60 38,75 46,68" fill="currentColor" opacity="0.4"/>
      <polygon points="58,60 62,75 54,68" fill="currentColor" opacity="0.4"/>
      
      {/* Window */}
      <circle cx="50" cy="35" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="50" cy="35" r="2" fill="currentColor" opacity="0.3"/>
      
      {/* Flame/exhaust */}
      <ellipse 
        cx="50" 
        cy="75" 
        rx="6" 
        ry="12" 
        fill="currentColor" 
        opacity="0.2"
        className="animate-bounce"
      />
      <ellipse 
        cx="50" 
        cy="78" 
        rx="4" 
        ry="8" 
        fill="currentColor" 
        opacity="0.3"
        className="animate-bounce"
        style={{animationDelay: '0.2s'}}
      />
      <ellipse 
        cx="50" 
        cy="81" 
        rx="2" 
        ry="5" 
        fill="currentColor" 
        opacity="0.4"
        className="animate-bounce"
        style={{animationDelay: '0.4s'}}
      />
      
      {/* Launch trail sparkles */}
      <circle cx="45" cy="85" r="1" fill="currentColor" opacity="0.5" className="animate-ping"/>
      <circle cx="55" cy="88" r="1" fill="currentColor" opacity="0.5" className="animate-ping" style={{animationDelay: '0.3s'}}/>
      <circle cx="48" cy="92" r="1" fill="currentColor" opacity="0.5" className="animate-ping" style={{animationDelay: '0.6s'}}/>
      
      {/* Success indicators around */}
      <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.4" className="animate-pulse"/>
      <circle cx="75" cy="30" r="2" fill="currentColor" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
      <circle cx="20" cy="50" r="2" fill="currentColor" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
      <circle cx="80" cy="55" r="2" fill="currentColor" opacity="0.4" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
      
      {/* Launch platform base */}
      <rect x="35" y="68" width="30" height="3" fill="currentColor" opacity="0.3" rx="1"/>
      
      {/* Motion lines */}
      <line x1="30" y1="40" x2="25" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <line x1="70" y1="40" x2="75" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <line x1="30" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <line x1="70" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
};

export default ImplementIllustration;
