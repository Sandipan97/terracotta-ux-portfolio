import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StickyNavigation = () => {
  const [activeSection, setActiveSection] = useState('objective');

  const sections = [
    { id: 'objective', label: 'Objective' },
    { id: 'research', label: 'Research' },
    { id: 'personas', label: 'Personas' },
    { id: 'findings', label: 'Findings' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'takeaways', label: 'Takeaways' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-20 right-4 z-40 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-2 shadow-lg hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default StickyNavigation;