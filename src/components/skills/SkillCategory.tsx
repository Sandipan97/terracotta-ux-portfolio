
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

interface SkillCategoryProps {
  category: {
    title: string;
    icon: string;
    color: string;
    skills: string[];
  };
  index: number;
}

const SkillCategory = ({ category, index }: SkillCategoryProps) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  return (
    <motion.div 
      className="bg-card/70 dark:bg-card/85 backdrop-blur-md p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg shadow-md border border-border hover:shadow-lg transition-all duration-300 min-h-fit" 
      variants={categoryVariants}
      whileHover={{ 
        y: -2,
        boxShadow: "0 8px 16px -4px rgba(0, 0, 0, 0.08)"
      }}
    >
      <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
        <motion.div 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mr-3 sm:mr-4"
          animate={{ 
            rotate: [0, 6, -6, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        >
          {category.icon}
        </motion.div>
        <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground leading-tight">
          {category.title}
        </h3>
      </div>
      
      <motion.div 
        className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5"
        variants={containerVariants}
      >
        {category.skills.map((skill) => (
          <SkillBadge 
            key={skill} 
            skill={skill} 
            color={category.color} 
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;
