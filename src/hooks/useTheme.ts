import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(
    (typeof window !== "undefined" &&
      (localStorage.getItem("theme") as Theme)) ||
      "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return [theme, toggleTheme];
};
