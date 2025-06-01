
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: "Research & Strategy",
    icon: "🔍",
    color: "bg-bengali-terracotta dark:bg-bengali-terracotta-light text-white",
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
    color: "bg-bengali-mustard dark:bg-bengali-mustard-light text-bengali-dark",
    skills: [
      "UI/UX & Product Design",
      "3D Design for UX",
      "Immersive Experience Design (AR)",
      "Advanced Multi-fidelity Prototyping",
      "AI-Powered Design Solutions"
    ]
  },
  {
    title: "Technical Design Leadership",
    icon: "⚡",
    color: "bg-bengali-red dark:bg-bengali-red-light text-white",
    skills: [
      "Design Systems Leadership",
      "Front-End Design Systems Coding"
    ]
  },
  {
    title: "Design Process & Innovation",
    icon: "🚀",
    color: "bg-gradient-to-r from-bengali-terracotta to-bengali-red dark:from-bengali-terracotta-light dark:to-bengali-red-light text-white",
    skills: [
      "Product Strategy & Ownership",
      "Design Thinking Facilitation",
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
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.08
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-12 md:py-16 bg-muted/20 dark:bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-10" 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Comprehensive skill set spanning strategic research, creative design execution, and technical leadership
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title} 
                className="bg-card/60 dark:bg-card/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-all duration-300" 
                variants={categoryVariants}
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 12px 20px -5px rgba(0, 0, 0, 0.08)"
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="text-2xl mr-3"
                    animate={{ 
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      delay: categoryIndex * 0.4
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.03,
                        rotate: 0.5
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Badge 
                        className={`${category.color} px-3 py-1.5 text-xs font-medium cursor-pointer transition-all duration-300 hover:shadow-sm border-0`}
                        variant="secondary"
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
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['5+ Years Experience', 'AI-Powered Design', 'Design Systems Expert', 'Research-Driven'].map((highlight, index) => (
              <motion.div
                key={highlight}
                className="bg-bengali-mustard/15 dark:bg-bengali-mustard-light/15 px-3 py-1.5 rounded-full border border-bengali-mustard/25 dark:border-bengali-mustard-light/25"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1 + index * 0.08,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-bengali-mustard-dark dark:text-bengali-mustard-light font-medium text-xs">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
