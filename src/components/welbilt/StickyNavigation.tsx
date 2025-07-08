import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Lightbulb, TrendingUp, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const navigationItems: NavigationItem[] = [
  { id: 'objective', label: 'Objective', icon: Target },
  { id: 'research', label: 'Research', icon: Search },
  { id: 'solutions', label: 'Solutions', icon: Lightbulb },
  { id: 'findings', label: 'Findings', icon: TrendingUp },
  { id: 'impact', label: 'Impact', icon: Rocket }
];

export const StickyNavigation = () => {
  const [activeSection, setActiveSection] = useState('objective');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-sm border border-blue-500/30 rounded-full px-2 py-2"
    >
      <div className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50' 
                  : 'text-gray-400 hover:text-blue-300 hover:bg-blue-500/10'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-blue-500/10 rounded-full border border-blue-500/30"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button>
          );
        })}
      </div>
    </motion.nav>
  );
};