
const IdeateIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Light bulb outline */}
      <path 
        d="M 50 20 C 60 20 68 28 68 38 C 68 45 65 50 62 54 L 62 65 L 38 65 L 38 54 C 35 50 32 45 32 38 C 32 28 40 20 50 20 Z" 
        fill="currentColor" 
        opacity="0.2" 
        className="animate-pulse"
      />
      
      {/* Light bulb border */}
      <path 
        d="M 50 20 C 60 20 68 28 68 38 C 68 45 65 50 62 54 L 62 65 L 38 65 L 38 54 C 35 50 32 45 32 38 C 32 28 40 20 50 20 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      
      {/* Base/screw threads */}
      <rect x="40" y="65" width="20" height="8" fill="currentColor" opacity="0.3" rx="2"/>
      <line x1="42" y1="67" x2="58" y2="67" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <line x1="42" y1="70" x2="58" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      
      {/* Filament lines */}
      <path d="M 45 35 Q 50 30 55 35" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 45 42 Q 50 37 55 42" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 45 49 Q 50 44 55 49" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      
      {/* Radiating idea lines */}
      <line x1="35" y1="25" x2="25" y2="15" stroke="currentColor" strokeWidth="2" opacity="0.5" className="animate-ping"/>
      <line x1="65" y1="25" x2="75" y2="15" stroke="currentColor" strokeWidth="2" opacity="0.5" className="animate-ping" style={{animationDelay: '0.3s'}}/>
      <line x1="75" y1="38" x2="85" y2="38" stroke="currentColor" strokeWidth="2" opacity="0.5" className="animate-ping" style={{animationDelay: '0.6s'}}/>
      <line x1="25" y1="38" x2="15" y2="38" stroke="currentColor" strokeWidth="2" opacity="0.5" className="animate-ping" style={{animationDelay: '0.9s'}}/>
      
      {/* Small idea sparks */}
      <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.7" className="animate-bounce"/>
      <circle cx="80" cy="20" r="1.5" fill="currentColor" opacity="0.7" className="animate-bounce" style={{animationDelay: '0.2s'}}/>
      <circle cx="85" cy="45" r="1.5" fill="currentColor" opacity="0.7" className="animate-bounce" style={{animationDelay: '0.4s'}}/>
      <circle cx="15" cy="45" r="1.5" fill="currentColor" opacity="0.7" className="animate-bounce" style={{animationDelay: '0.6s'}}/>
    </svg>
  );
};

export default IdeateIllustration;
