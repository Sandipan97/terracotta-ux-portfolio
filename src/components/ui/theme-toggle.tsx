
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-bengali-terracotta dark:text-bengali-mustard" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-bengali-terracotta dark:text-bengali-mustard" />
        </motion.div>
        
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
