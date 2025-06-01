
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Filter } from 'lucide-react';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  variants: any;
}

const FilterControls = ({ categories, selectedCategory, onCategoryChange, variants }: FilterControlsProps) => {
  return (
    <motion.div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12" variants={variants}>
      <div className="flex flex-col sm:flex-row items-center bg-muted/50 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg border border-border w-full sm:w-auto max-w-full overflow-x-auto">
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-3">
          <Filter size={14} className="text-bengali-terracotta mr-2" />
          <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">Filter:</span>
        </div>
        
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start w-full sm:w-auto">
          {categories.map((category, index) => (
            <motion.div 
              key={category} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 * index, duration: 0.3 }} 
              className="flex-shrink-0"
            >
              <Button 
                variant={selectedCategory === category ? "default" : "outline"} 
                className={`
                  rounded-full text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 transition-all duration-300 whitespace-nowrap
                  ${selectedCategory === category ? "bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white shadow-lg" : "border-bengali-terracotta/30 text-foreground hover:bg-bengali-terracotta/10"}
                `} 
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FilterControls;
