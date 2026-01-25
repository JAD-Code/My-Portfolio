import { useEffect, useState } from "react";
type Theme = "light" | "dark";
const useTheme = () => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme:  dark)")
      .matches
      ? "dark"
      : "light";

    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;

      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
};

export default useTheme;
