
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="relative h-12 w-12 rounded-xl border-2 border-bengali-terracotta/20 bg-background/80 backdrop-blur-md hover:bg-bengali-terracotta/10 hover:border-bengali-terracotta/40 transition-all duration-300 shadow-lg hover:shadow-xl dark:border-bengali-mustard/30 dark:hover:bg-bengali-mustard/10 dark:hover:border-bengali-mustard/50"
        disabled
      >
        <Sun className="h-5 w-5 text-bengali-terracotta dark:text-bengali-mustard opacity-50" />
      </Button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="relative"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative h-12 w-12 rounded-xl border-2 border-bengali-terracotta/20 bg-background/80 backdrop-blur-md hover:bg-bengali-terracotta/10 hover:border-bengali-terracotta/40 transition-all duration-300 shadow-lg hover:shadow-xl dark:border-bengali-mustard/30 dark:hover:bg-bengali-mustard/10 dark:hover:border-bengali-mustard/50"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 180, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="h-5 w-5 text-bengali-terracotta dark:text-bengali-mustard" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 180, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="h-5 w-5 text-bengali-terracotta dark:text-bengali-mustard" />
          </motion.div>
        )}
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-bengali-terracotta/20 to-bengali-mustard/20 opacity-0 dark:from-bengali-mustard/20 dark:to-bengali-terracotta/20"
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Button>
    </motion.div>
  );
}
