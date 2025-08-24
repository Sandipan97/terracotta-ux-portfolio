
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  variants: any;
}

const FilterControls = ({ categories, selectedCategory, onCategoryChange, variants }: FilterControlsProps) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-4"
      variants={variants}
    >
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`cursor-pointer transition-all duration-300 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base lg:text-lg font-medium ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground shadow-md hover:shadow-lg'
              : 'hover:bg-primary/10 hover:border-primary/40'
          }`}
          onClick={() => onCategoryChange(category)}
          role="button"
          tabIndex={0}
          aria-label={`Filter by ${category}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCategoryChange(category);
            }
          }}
        >
          {category}
        </Badge>
      ))}
    </motion.div>
  );
};

export default FilterControls;
