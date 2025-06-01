
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
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-muted/30 dark:bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My comprehensive skill set spans strategic research, creative design execution, and technical leadership
          </p>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title} 
                className="bg-card/70 dark:bg-card/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300" 
                variants={categoryVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="text-3xl mr-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: categoryIndex * 0.5
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 1
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        className={`${category.color} px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 hover:shadow-md border-0`}
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

        {/* Floating skill highlights */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['5+ Years Experience', 'AI-Powered Design', 'Design Systems Expert', 'Research-Driven'].map((highlight, index) => (
              <motion.div
                key={highlight}
                className="bg-bengali-mustard/20 dark:bg-bengali-mustard-light/20 px-4 py-2 rounded-full border border-bengali-mustard/30 dark:border-bengali-mustard-light/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-bengali-mustard-dark dark:text-bengali-mustard-light font-medium text-sm">
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
