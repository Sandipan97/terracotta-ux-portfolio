
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Pencil, SearchCheck, Lightbulb, Monitor, CheckSquare, Rocket } from 'lucide-react';

const designPhases = [
  {
    id: 1,
    icon: Search,
    label: 'Research',
    description: 'User insights',
    color: 'bg-bengali-terracotta'
  },
  {
    id: 2,
    icon: Pencil,
    label: 'Define',
    description: 'Problem clarity',
    color: 'bg-bengali-mustard'
  },
  {
    id: 3,
    icon: SearchCheck,
    label: 'More Research',
    description: 'Deep dive',
    color: 'bg-bengali-red'
  },
  {
    id: 4,
    icon: Lightbulb,
    label: 'Ideate',
    description: 'Creative solutions',
    color: 'bg-bengali-terracotta'
  },
  {
    id: 5,
    icon: Monitor,
    label: 'Prototype',
    description: 'Build & test',
    color: 'bg-bengali-mustard'
  },
  {
    id: 6,
    icon: CheckSquare,
    label: 'Test',
    description: 'Validate ideas',
    color: 'bg-bengali-red'
  },
  {
    id: 7,
    icon: Rocket,
    label: 'Implement',
    description: 'Launch solution',
    color: 'bg-bengali-terracotta'
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
                      group-hover:shadow-xl transition-shadow duration-300
                    `}
                    variants={iconVariants}
                  >
                    <phase.icon 
                      size={24} 
                      className="text-white lg:w-7 lg:h-7" 
                    />
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
                      <path 
                        d="M16 1l6 7-6 7M22 8H2" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
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
                    group-hover:shadow-xl transition-shadow duration-300
                  `}
                  variants={iconVariants}
                >
                  <phase.icon 
                    size={20} 
                    className="text-white" 
                  />
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
