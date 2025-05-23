
const PrototypeIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Monitor/screen */}
      <rect 
        x="20" 
        y="25" 
        width="50" 
        height="35" 
        fill="currentColor" 
        opacity="0.1" 
        rx="3"
        className="animate-pulse"
      />
      <rect 
        x="22" 
        y="27" 
        width="46" 
        height="31" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        rx="2"
      />
      
      {/* Screen content - wireframe elements */}
      <rect x="26" y="32" width="12" height="6" fill="currentColor" opacity="0.3"/>
      <rect x="42" y="32" width="20" height="3" fill="currentColor" opacity="0.2"/>
      <rect x="42" y="37" width="16" height="3" fill="currentColor" opacity="0.2"/>
      
      <rect x="26" y="44" width="36" height="8" fill="currentColor" opacity="0.15"/>
      <rect x="28" y="46" width="8" height="4" fill="currentColor" opacity="0.4" className="animate-pulse"/>
      <rect x="38" y="46" width="8" height="4" fill="currentColor" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
      <rect x="48" y="46" width="8" height="4" fill="currentColor" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
      
      {/* Stand */}
      <rect x="43" y="60" width="4" height="8" fill="currentColor" opacity="0.6"/>
      <rect x="35" y="68" width="20" height="3" fill="currentColor" opacity="0.4" rx="1"/>
      
      {/* Building blocks/tools around */}
      <rect x="10" y="75" width="8" height="8" fill="currentColor" opacity="0.3" rx="1"/>
      <rect x="80" y="15" width="8" height="8" fill="currentColor" opacity="0.3" rx="1"/>
      <rect x="75" y="75" width="8" height="8" fill="currentColor" opacity="0.3" rx="1"/>
      
      {/* Connecting lines showing iteration */}
      <path d="M 15 50 Q 10 45 15 40" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" markerEnd="url(#arrowhead)"/>
      <path d="M 85 50 Q 90 55 85 60" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" markerEnd="url(#arrowhead)"/>
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" opacity="0.4"/>
        </marker>
      </defs>
    </svg>
  );
};

export default PrototypeIllustration;
