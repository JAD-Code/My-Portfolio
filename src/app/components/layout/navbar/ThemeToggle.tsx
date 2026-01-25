import useTheme from "@/src/app/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  if (!theme) return null;
  return (
    <button
      className="border-2 rounded-full p-3
     text-black cursor-pointer
      bg-white/20 dark:bg-blue-900/20 backdrop-blur-xl 
           border-white/20 dark:border-blue-400/10
            transition-colors duration-300 ease-out"
      onClick={toggleTheme}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
