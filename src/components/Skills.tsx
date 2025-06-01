
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import ScrollToNextSection from '@/components/ui/ScrollToNextSection';

const skillCategories = [
  {
    title: "Research & Strategy",
    icon: "🔍",
    color: "bg-bengali-terracotta dark:bg-bengali-terracotta-light text-white hover:text-black dark:hover:text-black",
    skills: [
      "Strategic UX Research",
      "Usability & Accessibility Testing", 
      "Heuristic Evaluation & UX Audits",
      "Quality Function Deployment (QFD)",
      "Generative AI Research & Implementation"
    ]
  },
  {
    title: "Design Execution",
    icon: "🎨",
    color: "bg-bengali-mustard dark:bg-bengali-mustard-light text-black hover:text-black dark:text-black dark:hover:text-black",
    skills: [
      "UI/UX & Product Design",
      "3D Design",
      "Immersive Experience Design (AR)",
      "Advanced Multi-fidelity Prototyping",
      "AI-Powered Design Solutions"
    ]
  },
  {
    title: "Technical Design Leadership",
    icon: "⚡",
    color: "bg-bengali-red dark:bg-bengali-red-light text-white hover:text-black dark:hover:text-black",
    skills: [
      "Design Systems Expert",
      "Vibe Coding"
    ]
  },
  {
    title: "Design Process & Innovation",
    icon: "🚀",
    color: "bg-gradient-to-r from-bengali-terracotta to-bengali-red dark:from-bengali-terracotta-light dark:to-bengali-red-light text-white hover:text-black dark:hover:text-black",
    skills: [
      "Product Strategy & Ownership",
      "Design Thinking Master",
      "AI Prompt Engineering"
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.06
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -10,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-6 sm:py-8 md:py-10 lg:py-12 bg-muted/20 dark:bg-card/20 relative">
      {/* Gaussian blur backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm bg-background/40 dark:bg-background/60 z-0"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-6 sm:mb-8" 
          initial={{ opacity: 0, y: 15 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Comprehensive skill set spanning strategic research, creative design execution, and technical leadership
          </p>
        </motion.div>

        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title} 
                className="bg-card/70 dark:bg-card/85 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-all duration-300 min-h-fit" 
                variants={categoryVariants}
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.08)"
                }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div 
                    className="text-xl sm:text-2xl mr-3"
                    animate={{ 
                      rotate: [0, 6, -6, 0],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: categoryIndex * 0.3
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-1.5 sm:gap-2"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.02,
                        rotate: 0.3
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Badge 
                        className={`${category.color} px-2.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 hover:shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-bengali-mustard focus:ring-offset-2 leading-tight`}
                        variant="secondary"
                        role="button"
                        tabIndex={0}
                        aria-label={`Skill: ${skill}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            // Could add click handler here if needed
                          }
                        }}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact floating highlights */}
        <motion.div 
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-2">
            {['5+ Years Experience', 'AI-Powered Design', 'Design Systems Expert', 'Research-Driven'].map((highlight, index) => (
              <motion.div
                key={highlight}
                className="bg-bengali-mustard/15 dark:bg-bengali-mustard-light/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-bengali-mustard/25 dark:border-bengali-mustard-light/25 focus:outline-none focus:ring-2 focus:ring-bengali-mustard focus:ring-offset-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.8 + index * 0.06,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ scale: 1.02 }}
                tabIndex={0}
                role="button"
                aria-label={`Highlight: ${highlight}`}
              >
                <span className="text-bengali-mustard-dark dark:text-bengali-mustard-light font-medium text-xs sm:text-sm whitespace-nowrap">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll to next section button */}
        <ScrollToNextSection targetId="featured-projects" className="mt-6 sm:mt-8" />
      </div>
    </section>
  );
};

export default Skills;
