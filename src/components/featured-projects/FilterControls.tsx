
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  variants: any;
}

const FilterControls = ({ categories, selectedCategory, onCategoryChange, variants }: FilterControlsProps) => {
  return (
    <motion.div className="flex flex-wrap justify-center gap-3 mb-12" variants={variants}>
      {categories.map((category, index) => (
        <motion.div 
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.3 }}
        >
          <Button
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            className={
              selectedCategory === category
                ? "bg-gradient-to-r from-bengali-terracotta to-bengali-red hover:from-bengali-terracotta/90 hover:to-bengali-red/90 text-white rounded-full dark:from-bengali-terracotta-light dark:to-bengali-red-light shadow-lg hover:shadow-xl transition-all duration-300"
                : "border-border text-foreground hover:bg-muted rounded-full dark:hover:bg-card/60 shadow-sm hover:shadow-md transition-all duration-300"
            }
            onClick={() => onCategoryChange(category)}
            data-lovable-editable={`featured-projects-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span data-lovable-editable={`filter-button-text-${category.toLowerCase().replace(/\s+/g, '-')}`}>
              {category}
            </span>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FilterControls;
