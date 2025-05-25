import { motion } from 'framer-motion';

const PointingIllustration = () => {
  return (
    <motion.svg 
      viewBox="0 0 120 150" 
      className="w-16 h-20 md:w-20 md:h-24"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {/* Head */}
      <ellipse 
        cx="60" 
        cy="35" 
        rx="18" 
        ry="20" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="text-foreground"
      />
      
      {/* Hair */}
      <motion.path 
        d="M 42 25 Q 60 15 78 25 Q 78 20 60 18 Q 42 20 42 25"
        fill="currentColor"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
      
      {/* Glasses */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.2 }}
        className="text-foreground"
      >
        <circle 
          cx="53" 
          cy="32" 
          r="6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        <circle 
          cx="67" 
          cy="32" 
          r="6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        <line 
          x1="59" 
          y1="32" 
          x2="61" 
          y2="32" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
      </motion.g>
      
      {/* Eyes */}
      <motion.circle 
        cx="53" 
        cy="32" 
        r="1.5" 
        fill="currentColor"
        className="text-foreground"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2.5 }}
      />
      <motion.circle 
        cx="67" 
        cy="32" 
        r="1.5" 
        fill="currentColor"
        className="text-foreground"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2.6 }}
      />
      
      {/* Nose */}
      <motion.path 
        d="M 60 36 L 59 39 L 61 39 Z"
        fill="currentColor"
        className="text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.7 }}
      />
      
      {/* Smile */}
      <motion.path 
        d="M 54 42 Q 60 47 66 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 2.8 }}
      />
      
      {/* Beard */}
      <motion.path 
        d="M 48 45 Q 60 52 72 45 Q 72 50 60 53 Q 48 50 48 45"
        fill="currentColor"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 3 }}
      />
      
      {/* Body/Shirt */}
      <motion.rect 
        x="45" 
        y="55" 
        width="30" 
        height="40" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      />
      
      {/* Shirt pattern */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.8 }}
        className="text-muted-foreground"
      >
        <line x1="48" y1="60" x2="72" y2="84" stroke="currentColor" strokeWidth="0.5" />
        <line x1="48" y1="68" x2="72" y2="92" stroke="currentColor" strokeWidth="0.5" />
        <line x1="48" y1="76" x2="64" y2="92" stroke="currentColor" strokeWidth="0.5" />
        <line x1="56" y1="58" x2="72" y2="74" stroke="currentColor" strokeWidth="0.5" />
        <line x1="64" y1="58" x2="72" y2="66" stroke="currentColor" strokeWidth="0.5" />
      </motion.g>
      
      {/* Pointing arm - pointing to the RIGHT towards the button */}
      <motion.g
        initial={{ rotate: -30, transformOrigin: "75px 65px" }}
        animate={{ rotate: 0, transformOrigin: "75px 65px" }}
        transition={{ duration: 0.8, delay: 4, type: "spring", stiffness: 200 }}
      >
        {/* Upper arm */}
        <line 
          x1="75" 
          y1="65" 
          x2="95" 
          y2="75" 
          stroke="currentColor" 
          strokeWidth="3"
          strokeLinecap="round"
          className="text-foreground"
        />
        {/* Forearm */}
        <line 
          x1="95" 
          y1="75" 
          x2="115" 
          y2="78" 
          stroke="currentColor" 
          strokeWidth="3"
          strokeLinecap="round"
          className="text-foreground"
        />
        {/* Hand pointing RIGHT */}
        <motion.path 
          d="M 115 78 L 118 76 L 120 78 L 118 80 Z"
          fill="currentColor"
          className="text-bengali-terracotta dark:text-red-500"
          animate={{ 
            x: [0, 2, 0],
            y: [0, -1, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </motion.g>
      
      {/* Other arm */}
      <motion.line 
        x1="45" 
        y1="65" 
        x2="35" 
        y2="85" 
        stroke="currentColor" 
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      />
      
      {/* Legs */}
      <motion.line 
        x1="52" 
        y1="95" 
        x2="50" 
        y2="120" 
        stroke="currentColor" 
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 3.6 }}
      />
      <motion.line 
        x1="68" 
        y1="95" 
        x2="70" 
        y2="120" 
        stroke="currentColor" 
        strokeWidth="3"
        strokeLinecap="round"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 3.7 }}
      />
      
      {/* Shoes */}
      <motion.ellipse 
        cx="48" 
        cy="122" 
        rx="4" 
        ry="2" 
        fill="currentColor"
        className="text-foreground"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 4.2 }}
      />
      <motion.ellipse 
        cx="72" 
        cy="122" 
        rx="4" 
        ry="2" 
        fill="currentColor"
        className="text-foreground"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 4.3 }}
      />
    </motion.svg>
  );
};

export default PointingIllustration;
