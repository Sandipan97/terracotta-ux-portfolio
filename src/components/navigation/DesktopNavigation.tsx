
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import NavigationLinks from './NavigationLinks';

const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavigationLinks />
      <ThemeToggle />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className="bg-bengali-red hover:bg-bengali-terracotta text-white shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-bengali-red-light dark:hover:bg-bengali-red">
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default DesktopNavigation;
