
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EditableImage } from '../ui/editable-image';

const HeroProfileSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto-flip animation on component mount
  useEffect(() => {
    const autoFlip = async () => {
      // Wait 2 seconds after component mounts
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Flip to alternate image
      setIsFlipped(true);

      // Wait 3 seconds then flip back
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsFlipped(false);
    };
    autoFlip();
  }, []);

  const handleProfileClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      className="order-1 md:order-2 flex justify-center md:justify-end" 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
    >
      <div className="relative">
        <motion.div 
          className="w-80 h-80 sm:w-96 sm:h-96 md:w-120 md:h-120 lg:w-200 lg:h-200 rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer relative" 
          onClick={handleProfileClick} 
          whileHover={{
            scale: 1.05,
            borderColor: "hsl(var(--warm-terracotta))",
            boxShadow: "0 20px 40px -10px hsla(var(--warm-terracotta), 0.3)"
          }} 
          transition={{ duration: 0.3 }} 
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="w-full h-full relative" 
            animate={{ rotateY: isFlipped ? 180 : 0 }} 
            transition={{ duration: 0.6 }} 
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front side - Profile Image */}
            <div 
              className="absolute inset-0 w-full h-full" 
              style={{ backfaceVisibility: "hidden" }}
            >
              <EditableImage 
                alt="Senior UX Designer and Researcher" 
                src="/lovable-uploads/d6f8c20d-1961-4552-a823-c9c0b12a8f05.jpg" 
                className="w-full h-full transition-transform duration-500 hover:scale-110" 
                objectFit="cover" 
                editableKey="hero-profile-front-image" 
                fallbackSrc="/placeholder.svg" 
                priority="critical"
                eager={true}
              />
            </div>
            
            {/* Back side - New Illustration */}
            <div 
              className="absolute inset-0 w-full h-full bg-white flex items-center justify-center" 
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <EditableImage 
                src="/lovable-uploads/6398c5dd-6f26-4b1e-81d7-c8ba13221088.png" 
                alt="James Brown Style Illustration" 
                className="w-full h-full" 
                objectFit="cover" 
                editableKey="hero-profile-back-image" 
                fallbackSrc="/placeholder.svg"
                priority="critical"
                eager={true}
                lazy={false}
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-warm-terracotta dark:text-white px-3 md:px-6 py-1 md:py-3 rounded-full font-medium bg-white dark:bg-warm-terracotta backdrop-blur-md border border-white/20 dark:border-warm-terracotta/20 shadow-lg text-xs md:text-base" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 0.5 }} 
          whileHover={{ scale: 1.05, y: -2 }} 
          data-lovable-editable="hero-profile-chip"
        >
          AI is Everywhere - Can You Spot?
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroProfileSection;
