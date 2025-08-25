
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import NavigationLinks from './NavigationLinks';

const DesktopNavigation = () => {
  return (
    <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
      <NavigationLinks />
      <ThemeToggle />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button 
          size="lg"
          data-lovable-editable="nav-resume-button"
          className="text-sm xl:text-base"
        >
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default DesktopNavigation;
