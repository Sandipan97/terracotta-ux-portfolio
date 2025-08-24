
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  skill: string;
  color: string;
}

const SkillBadge = ({ skill, color }: SkillBadgeProps) => {
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
    <motion.div
      variants={skillVariants}
      whileHover={{ 
        scale: 1.02,
        rotate: 0.3
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Badge 
        className={`${color} px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all duration-300 hover:shadow-md border-0 focus:outline-none focus:ring-2 focus:ring-warm-terracotta focus:ring-offset-2 leading-tight shadow-sm`}
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
        data-lovable-editable={`skill-badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span data-lovable-editable={`skill-text-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
          {skill}
        </span>
      </Badge>
    </motion.div>
  );
};

export default SkillBadge;
