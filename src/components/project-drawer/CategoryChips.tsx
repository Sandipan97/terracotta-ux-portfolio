
import { motion } from 'framer-motion';

interface CategoryChipsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isVisible: boolean;
}

const categories = [
  'All',
  'UX',
  'UI', 
  'Research',
  'Design Systems',
  'AR Projects',
  'Product Design',
  'Mobile App'
];

const CategoryChips = ({ selectedCategory, onCategoryChange, isVisible }: CategoryChipsProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'UX': return '🎯';
      case 'UI': return '🎨';
      case 'Research': return '🔍';
      case 'Design Systems': return '🧩';
      case 'AR Projects': return '🥽';
      case 'Product Design': return '📱';
      case 'Mobile App': return '📲';
      default: return '📂';
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            flex items-center space-x-2 backdrop-blur-sm
            ${selectedCategory === category
              ? 'bg-bengali-terracotta text-white shadow-lg transform scale-105'
              : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-102'
            }
          `}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{ 
            scale: selectedCategory === category ? 1.05 : 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-base">{getCategoryIcon(category)}</span>
          <span>{category}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryChips;
