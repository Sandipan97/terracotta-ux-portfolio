
import { motion, AnimatePresence } from 'framer-motion';

interface PageBackgroundProps {
  theme: string | null;
}

const PageBackground = ({ theme }: PageBackgroundProps) => {
  const getPatternByTheme = (themeName: string) => {
    switch (themeName) {
      case 'research':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-5 dark:opacity-10">
            <circle cx="15" cy="15" r="3" fill="currentColor"/>
            <circle cx="45" cy="45" r="2" fill="currentColor"/>
            <path d="M20 20L25 25M35 10L40 15" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      case 'define':
        return (
          <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-5 dark:opacity-10">
            <rect x="10" y="20" width="15" height="2" fill="currentColor"/>
            <rect x="30" y="30" width="10" height="2" fill="currentColor"/>
            <circle cx="40" cy="15" r="1.5" fill="currentColor"/>
          </svg>
        );
      case 'more-research':
        return (
          <svg width="55" height="55" viewBox="0 0 55 55" className="opacity-5 dark:opacity-10">
            <circle cx="20" cy="20" r="2" fill="currentColor"/>
            <circle cx="35" cy="35" r="1.5" fill="currentColor"/>
            <path d="M15 40L20 35M40 15L35 20" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      case 'ideate':
        return (
          <svg width="45" height="45" viewBox="0 0 45 45" className="opacity-5 dark:opacity-10">
            <circle cx="22" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M28 26L32 30" stroke="currentColor" strokeWidth="1"/>
            <circle cx="10" cy="35" r="1" fill="currentColor"/>
            <circle cx="35" cy="10" r="1.5" fill="currentColor"/>
          </svg>
        );
      case 'prototype':
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-5 dark:opacity-10">
            <rect x="10" y="10" width="8" height="6" fill="none" stroke="currentColor" strokeWidth="1"/>
            <rect x="25" y="20" width="6" height="4" fill="currentColor"/>
            <circle cx="15" cy="30" r="1" fill="currentColor"/>
          </svg>
        );
      case 'test':
        return (
          <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-5 dark:opacity-10">
            <path d="M15 20L20 25L30 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="35" cy="35" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
            <rect x="10" y="35" width="3" height="3" fill="currentColor"/>
          </svg>
        );
      case 'deploy':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-5 dark:opacity-10">
            <path d="M20 30L24 20L28 30L24 25Z" fill="currentColor"/>
            <circle cx="35" cy="15" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="35" r="1" fill="currentColor"/>
            <path d="M15 15L20 10M35 35L40 30" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      default:
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-3 dark:opacity-8">
            <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="30" cy="30" r="1.5" fill="currentColor"/>
          </svg>
        );
    }
  };

  const getColorByTheme = (themeName: string) => {
    switch (themeName) {
      case 'research': return 'text-red-600 dark:text-red-400';
      case 'define': return 'text-orange-600 dark:text-orange-400';
      case 'more-research': return 'text-purple-600 dark:text-purple-400';
      case 'ideate': return 'text-blue-600 dark:text-blue-400';
      case 'prototype': return 'text-indigo-600 dark:text-indigo-400';
      case 'test': return 'text-green-600 dark:text-green-400';
      case 'deploy': return 'text-emerald-600 dark:text-emerald-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <AnimatePresence>
        {theme && (
          <motion.div
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${getColorByTheme(theme)}`}
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">${getPatternByTheme(theme)?.props.children || ''}</svg>`
              )}")`,
              backgroundRepeat: 'repeat',
              backgroundSize: theme === 'ideate' ? '45px 45px' : theme === 'deploy' ? '48px 48px' : '50px 50px'
            }}
          >
            <motion.div
              animate={{
                backgroundPositionX: ['0px', '60px'],
                backgroundPositionY: ['0px', '60px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full"
              style={{
                backgroundImage: 'inherit',
                backgroundRepeat: 'inherit',
                backgroundSize: 'inherit'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Default subtle pattern when no theme is active */}
      {!theme && (
        <motion.div
          className="absolute inset-0 text-muted-foreground opacity-2 dark:opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '40px 40px'
          }}
        >
          <motion.div
            animate={{
              backgroundPositionX: ['0px', '40px'],
              backgroundPositionY: ['0px', '40px']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: 'inherit',
              backgroundRepeat: 'inherit',
              backgroundSize: 'inherit'
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default PageBackground;
