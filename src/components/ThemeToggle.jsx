import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/util";

// ThemeToggle.jsx o .tsx

export const ThemeToggle = ({ className = "hidden" }) => {
  const [isDarkMode, setIsDarkmode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return true;
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || !storedTheme) {
      document.documentElement.classList.add("dark");
      setIsDarkmode(true);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkmode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkmode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-hidden",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 cursor-pointer" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 cursor-pointer" />
      )}
    </button>
  );
};
