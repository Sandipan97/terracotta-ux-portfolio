
const DefineIllustration = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Pencil body */}
      <rect 
        x="25" 
        y="20" 
        width="6" 
        height="50" 
        fill="currentColor" 
        opacity="0.8" 
        rx="3"
        className="animate-pulse"
      />
      
      {/* Pencil tip */}
      <polygon 
        points="25,70 31,70 28,78" 
        fill="currentColor" 
        opacity="0.9"
      />
      
      {/* Eraser */}
      <rect x="24" y="15" width="8" height="8" fill="currentColor" opacity="0.6" rx="4"/>
      
      {/* Paper/notepad */}
      <rect x="45" y="25" width="35" height="45" fill="currentColor" opacity="0.1" rx="3"/>
      <rect x="47" y="27" width="35" height="45" fill="currentColor" opacity="0.15" rx="3"/>
      
      {/* Writing lines on paper */}
      <line x1="52" y1="35" x2="72" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="52" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="52" y1="45" x2="68" y2="45" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <line x1="52" y1="50" x2="73" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      
      {/* Problem definition icon */}
      <circle cx="65" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M 61 60 L 65 64 L 72 57" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
      
      {/* Thought bubbles */}
      <circle cx="15" cy="30" r="3" fill="currentColor" opacity="0.3" className="animate-bounce"/>
      <circle cx="12" cy="22" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="8" cy="18" r="1.5" fill="currentColor" opacity="0.5"/>
    </svg>
  );
};

export default DefineIllustration;
