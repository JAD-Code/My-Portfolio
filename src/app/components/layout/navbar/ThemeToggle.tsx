import useTheme from "@/src/app/hooks/useTheme";

import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative h-10 w-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 backdrop-blur-md overflow-hidden group"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? (
            <Moon size={18} className="text-blue-400" />
          ) : (
            <Sun size={18} className="text-yellow-400" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
