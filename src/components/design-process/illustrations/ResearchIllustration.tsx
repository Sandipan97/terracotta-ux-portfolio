
const ResearchIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Magnifying glass */}
      <circle 
        cx="35" 
        cy="35" 
        r="20" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3"
        className="animate-pulse"
      />
      
      {/* Handle */}
      <line 
        x1="52" 
        y1="52" 
        x2="70" 
        y2="70" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      
      {/* Document stack */}
      <rect x="10" y="60" width="25" height="30" fill="currentColor" opacity="0.1" rx="2"/>
      <rect x="12" y="62" width="25" height="30" fill="currentColor" opacity="0.2" rx="2"/>
      <rect x="14" y="64" width="25" height="30" fill="currentColor" opacity="0.3" rx="2"/>
      
      {/* Document lines */}
      <line x1="18" y1="70" x2="32" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <line x1="18" y1="74" x2="35" y2="74" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <line x1="18" y1="78" x2="30" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      
      {/* Search results indicators */}
      <circle cx="65" cy="25" r="2" fill="currentColor" className="animate-ping"/>
      <circle cx="75" cy="35" r="2" fill="currentColor" className="animate-ping" style={{animationDelay: '0.5s'}}/>
      <circle cx="70" cy="15" r="2" fill="currentColor" className="animate-ping" style={{animationDelay: '1s'}}/>
    </svg>
  );
};

export default ResearchIllustration;
