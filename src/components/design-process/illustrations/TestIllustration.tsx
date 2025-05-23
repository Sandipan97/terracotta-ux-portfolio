
const TestIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Clipboard */}
      <rect 
        x="30" 
        y="15" 
        width="35" 
        height="50" 
        fill="currentColor" 
        opacity="0.1" 
        rx="3"
      />
      <rect 
        x="32" 
        y="17" 
        width="31" 
        height="46" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        rx="2"
      />
      
      {/* Clip */}
      <rect x="42" y="12" width="12" height="6" fill="currentColor" opacity="0.4" rx="2"/>
      
      {/* Checklist items */}
      <circle cx="38" cy="30" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M 36 30 L 38 32 L 42 28" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-pulse"/>
      <rect x="45" y="28" width="12" height="2" fill="currentColor" opacity="0.3"/>
      
      <circle cx="38" cy="40" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M 36 40 L 38 42 L 42 38" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
      <rect x="45" y="38" width="15" height="2" fill="currentColor" opacity="0.3"/>
      
      <circle cx="38" cy="50" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="45" y="48" width="10" height="2" fill="currentColor" opacity="0.3"/>
      
      {/* User feedback indicators */}
      <circle cx="15" cy="25" r="3" fill="currentColor" opacity="0.4"/>
      <path d="M 13 25 Q 15 22 17 25" fill="none" stroke="currentColor" strokeWidth="1"/>
      
      <circle cx="80" cy="35" r="3" fill="currentColor" opacity="0.4"/>
      <path d="M 78 35 Q 80 32 82 35" fill="none" stroke="currentColor" strokeWidth="1"/>
      
      <circle cx="20" cy="70" r="3" fill="currentColor" opacity="0.4"/>
      <path d="M 18 70 Q 20 67 22 70" fill="none" stroke="currentColor" strokeWidth="1"/>
      
      {/* Validation symbols */}
      <rect x="75" y="60" width="12" height="8" fill="currentColor" opacity="0.2" rx="2"/>
      <path d="M 78 64 L 81 67 L 86 62" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
      
      {/* Testing arrows */}
      <path d="M 70 45 Q 75 40 70 35" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" className="animate-pulse"/>
    </svg>
  );
};

export default TestIllustration;
