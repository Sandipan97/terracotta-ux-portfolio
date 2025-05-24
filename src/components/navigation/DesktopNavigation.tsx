
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NavigationLinks from './NavigationLinks';

const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavigationLinks />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className="bg-bengali-red hover:bg-bengali-terracotta text-white shadow-lg hover:shadow-xl transition-all duration-300">
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default DesktopNavigation;
