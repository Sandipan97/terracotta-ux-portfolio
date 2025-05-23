
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const designPhases = [
  {
    id: 1,
    label: 'Research',
    description: 'User insights',
    color: 'bg-bengali-terracotta',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.circle
          cx="13"
          cy="13"
          r="9"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.path
          d="m22 22 6 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        <motion.circle
          cx="13"
          cy="13"
          r="3"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
      </svg>
    )
  },
  {
    id: 2,
    label: 'Define',
    description: 'Problem clarity',
    color: 'bg-bengali-mustard',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.path
          d="M20 4 12 28l-4-8-8-4 20-12z"
          fill="white"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.path
          d="M4 20 8 24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="20"
          cy="4"
          r="2"
          fill="rgba(255,255,255,0.6)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
      </svg>
    )
  },
  {
    id: 3,
    label: 'More Research',
    description: 'Deep dive',
    color: 'bg-bengali-red',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.circle
          cx="11"
          cy="11"
          r="7"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.path
          d="m18 18 4 4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <motion.path
          d="M26 10h4M28 8v4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
        <motion.circle
          cx="11"
          cy="11"
          r="2"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.7, delay: 1.8 }}
        />
      </svg>
    )
  },
  {
    id: 4,
    label: 'Ideate',
    description: 'Creative solutions',
    color: 'bg-bengali-terracotta',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.path
          d="M12 2a10 10 0 0 0-2 19.4V25a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.6A10 10 0 0 0 12 2Z"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.path
          d="M10 27h4"
          stroke="#802f1f"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
        <motion.path
          d="M10 29h4"
          stroke="#802f1f"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.circle
          cx="12"
          cy="8"
          r="1"
          fill="#802f1f"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <motion.path
          d="M8 8h1M15 8h1M12 4v1M12 11v1"
          stroke="rgba(128,47,31,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        />
      </svg>
    )
  },
  {
    id: 5,
    label: 'Prototype',
    description: 'Build & test',
    color: 'bg-bengali-mustard',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.rect
          x="4"
          y="6"
          width="24"
          height="16"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.rect
          x="12"
          y="26"
          width="8"
          height="2"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <motion.rect
          x="8"
          y="10"
          width="6"
          height="4"
          rx="1"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.rect
          x="18"
          y="10"
          width="6"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        <motion.rect
          x="18"
          y="13"
          width="4"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        <motion.circle
          cx="16"
          cy="30"
          r="2"
          fill="rgba(255,255,255,0.8)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, delay: 1.8 }}
        />
      </svg>
    )
  },
  {
    id: 6,
    label: 'Test',
    description: 'Validate ideas',
    color: 'bg-bengali-red',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="m9 16 2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        <motion.rect
          x="19"
          y="12"
          width="6"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        />
        <motion.rect
          x="19"
          y="15"
          width="4"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        />
        <motion.rect
          x="19"
          y="18"
          width="5"
          height="1"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
        <motion.circle
          cx="11"
          cy="14"
          r="1"
          fill="rgba(255,255,255,0.8)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.6, delay: 1.9 }}
        />
      </svg>
    )
  },
  {
    id: 7,
    label: 'Implement',
    description: 'Launch solution',
    color: 'bg-bengali-terracotta',
    illustration: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-6 h-6 lg:w-8 lg:h-8">
        <motion.path
          d="M6 16 16 6l10 10-4 4-6-6-6 6-4-4z"
          fill="white"
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.rect
          x="14"
          y="16"
          width="4"
          height="10"
          fill="white"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.path
          d="M10 26h12"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
        <motion.circle
          cx="16"
          cy="4"
          r="2"
          fill="rgba(255,255,255,0.8)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <motion.path
          d="M12 8l1 1M19 8l-1 1"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
      </svg>
    )
  }
];

const DesignProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const phaseVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const arrowVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -90
    },
    show: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        delay: 0.2
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-bengali-mustard/10 filter blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-bengali-terracotta/10 filter blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-bengali-dark mb-4">
            My Design Process
          </h2>
          <p className="text-bengali-dark/70 max-w-2xl mx-auto text-lg">
            A structured, research-driven approach to creating user-centered solutions
          </p>
        </motion.div>

        {/* Desktop and Tablet Layout */}
        <div className="hidden md:block">
          <motion.div 
            className="flex items-center justify-center gap-4 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {designPhases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <motion.div
                  className="flex flex-col items-center group cursor-pointer"
                  variants={phaseVariants}
                  whileHover="hover"
                  initial="rest"
                >
                  <motion.div
                    className={`
                      w-16 h-16 lg:w-20 lg:h-20 rounded-full ${phase.color} 
                      flex items-center justify-center shadow-lg mb-3
                      group-hover:shadow-xl transition-shadow duration-300 overflow-hidden
                    `}
                    variants={iconVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {phase.illustration}
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    variants={iconVariants}
                  >
                    <h3 className="font-heading text-sm lg:text-base font-semibold text-bengali-dark mb-1">
                      {phase.label}
                    </h3>
                    <p className="text-xs lg:text-sm text-bengali-dark/60">
                      {phase.description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Arrow between phases */}
                {index < designPhases.length - 1 && (
                  <motion.div
                    className="mx-2 lg:mx-4"
                    variants={arrowVariants}
                  >
                    <svg 
                      width="24" 
                      height="16" 
                      viewBox="0 0 24 16" 
                      fill="none" 
                      className="text-bengali-terracotta"
                    >
                      <motion.path 
                        d="M16 1l6 7-6 7M22 8H2" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {designPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="flex flex-col items-center group cursor-pointer"
                variants={phaseVariants}
                whileHover="hover"
                initial="rest"
              >
                <motion.div
                  className={`
                    w-14 h-14 rounded-full ${phase.color} 
                    flex items-center justify-center shadow-lg mb-3
                    group-hover:shadow-xl transition-shadow duration-300 overflow-hidden
                  `}
                  variants={iconVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {phase.illustration}
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  variants={iconVariants}
                >
                  <h3 className="font-heading text-sm font-semibold text-bengali-dark mb-1">
                    {phase.label}
                  </h3>
                  <p className="text-xs text-bengali-dark/60">
                    {phase.description}
                  </p>
                </motion.div>

                {/* Mobile connecting lines */}
                {index < designPhases.length - 1 && index % 2 === 1 && (
                  <motion.div
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-bengali-terracotta/30"
                    variants={arrowVariants}
                    style={{ 
                      top: `${Math.floor(index / 2) * 120 + 80}px`
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom description */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-bengali-dark/60 max-w-3xl mx-auto">
            This iterative process ensures that every design decision is backed by research and user feedback, 
            creating solutions that are both innovative and user-centered.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignProcess;
