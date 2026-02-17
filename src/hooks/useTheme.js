import { useState, useEffect } from "react";

const KEY = "bodymotion_theme";

export default function useTheme() {
  const [theme, setTheme] = useState("dark"); // dark by default

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
