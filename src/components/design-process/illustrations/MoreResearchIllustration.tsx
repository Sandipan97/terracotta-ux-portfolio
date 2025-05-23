
const MoreResearchIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Enhanced magnifying glass */}
      <circle 
        cx="40" 
        cy="40" 
        r="18" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3"
        className="animate-pulse"
      />
      
      {/* Handle */}
      <line 
        x1="55" 
        y1="55" 
        x2="70" 
        y2="70" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      
      {/* Plus sign in magnifying glass */}
      <line x1="35" y1="40" x2="45" y2="40" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="35" x2="40" y2="45" stroke="currentColor" strokeWidth="2"/>
      
      {/* Multiple data sources */}
      <rect x="10" y="15" width="20" height="15" fill="currentColor" opacity="0.2" rx="2"/>
      <rect x="5" y="35" width="20" height="15" fill="currentColor" opacity="0.25" rx="2"/>
      <rect x="15" y="55" width="20" height="15" fill="currentColor" opacity="0.3" rx="2"/>
      
      {/* Data points/connections */}
      <circle cx="75" cy="20" r="2" fill="currentColor" opacity="0.6"/>
      <circle cx="85" cy="30" r="2" fill="currentColor" opacity="0.6"/>
      <circle cx="80" cy="40" r="2" fill="currentColor" opacity="0.6"/>
      
      {/* Connection lines */}
      <line x1="75" y1="20" x2="80" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="80" y1="25" x2="85" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="85" y1="30" x2="80" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="80" y1="35" x2="80" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      
      {/* Research notes indicator */}
      <path d="M 70 80 Q 75 75 80 80 Q 85 85 90 80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" className="animate-pulse"/>
    </svg>
  );
};

export default MoreResearchIllustration;
