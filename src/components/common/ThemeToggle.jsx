import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center bg-surface-secondary rounded-full p-1"
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme === "dark" ? "moon" : "sun"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
          style={{ left: theme === "dark" ? "auto" : "4px", right: theme === "dark" ? "4px" : "auto" }}
        >
          {theme === "dark" ? (
            <Moon className="text-accent-warning" size={20} />
          ) : (
            <Sun className="text-accent-warning" size={20} />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
