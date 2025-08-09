
import { motion } from 'framer-motion';
import { EditableImage } from '@/components/ui/editable-image';

interface ToolLogoProps {
  name: string;
  logoUrl: string;
  color: string;
}

const ToolLogo = ({ name, logoUrl, color }: ToolLogoProps) => {
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Create a more visible fallback with the first letter of the tool name
  const fallbackSrc = `https://via.placeholder.com/64x64/6366f1/ffffff?text=${name.charAt(0)}`;

  return (
    <motion.div
      variants={logoVariants}
      whileHover={{ 
        scale: 1.05,
        y: -5
      }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-4 sm:p-6 bg-card/70 dark:bg-card/85 backdrop-blur-md rounded-lg shadow-md border border-border hover:shadow-lg transition-all duration-300 min-h-[120px] group"
    >
      <motion.div 
        className="w-12 h-12 sm:w-16 sm:h-16 mb-2 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <EditableImage 
          src={logoUrl} 
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          objectFit="contain"
          editableKey={`tool-logo-${name.toLowerCase().replace(/\s+/g, '-')}`}
          fallbackSrc={fallbackSrc}
          priority="high"
          eager={true}
        />
      </motion.div>
      <span 
        className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight"
        data-lovable-editable={`tool-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {name}
      </span>
    </motion.div>
  );
};

export default ToolLogo;
