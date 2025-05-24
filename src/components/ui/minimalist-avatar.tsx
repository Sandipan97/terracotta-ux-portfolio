
import { motion } from 'framer-motion';

const MinimalistAvatar = () => {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <filter id="avatarGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D1C1"/>
          <stop offset="100%" stopColor="#E8B896"/>
        </linearGradient>
        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A"/>
          <stop offset="100%" stopColor="#2C2C2C"/>
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="95" 
        fill="url(#skinGradient)" 
        filter="url(#avatarGlow)"
      />
      
      {/* Hair */}
      <motion.path 
        d="M 40 80 Q 100 20 160 80 Q 160 60 100 50 Q 40 60 40 80"
        fill="url(#hairGradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* Face outline */}
      <ellipse 
        cx="100" 
        cy="120" 
        rx="45" 
        ry="55" 
        fill="url(#skinGradient)"
        stroke="#D4A574" 
        strokeWidth="2"
      />
      
      {/* Eyes */}
      <motion.circle 
        cx="85" 
        cy="110" 
        r="3" 
        fill="#2C2C2C"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.circle 
        cx="115" 
        cy="110" 
        r="3" 
        fill="#2C2C2C"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      
      {/* Nose */}
      <motion.path 
        d="M 100 120 L 98 125 L 102 125 Z"
        fill="#D4A574"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      
      {/* Mouth */}
      <motion.path 
        d="M 92 135 Q 100 142 108 135"
        fill="none"
        stroke="#C19660"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      
      {/* Glasses (optional design element) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <circle 
          cx="85" 
          cy="110" 
          r="12" 
          fill="none" 
          stroke="#802f1f" 
          strokeWidth="2"
          opacity="0.7"
        />
        <circle 
          cx="115" 
          cy="110" 
          r="12" 
          fill="none" 
          stroke="#802f1f" 
          strokeWidth="2"
          opacity="0.7"
        />
        <line 
          x1="97" 
          y1="110" 
          x2="103" 
          y2="110" 
          stroke="#802f1f" 
          strokeWidth="2"
          opacity="0.7"
        />
      </motion.g>
      
      {/* Subtle animation elements */}
      <motion.circle 
        cx="70" 
        cy="90" 
        r="2" 
        fill="#F9D342" 
        opacity="0.6"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.circle 
        cx="130" 
        cy="95" 
        r="1.5" 
        fill="#802f1f" 
        opacity="0.5"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </svg>
  );
};

export default MinimalistAvatar;
