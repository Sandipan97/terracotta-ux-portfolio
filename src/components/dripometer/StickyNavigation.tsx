import { motion } from 'framer-motion';

const StickyNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap gap-2 py-3 justify-center md:justify-start overflow-x-auto">
          {[
            { id: 'objective', label: 'Objective' },
            { id: 'research', label: 'Research' },
            { id: 'findings', label: 'Findings' },
            { id: 'solutions', label: 'Solutions' },
            { id: 'translation', label: 'Methods' },
            { id: 'status', label: 'Status' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-1.5 text-sm rounded-full border border-border hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300 whitespace-nowrap dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNavigation;