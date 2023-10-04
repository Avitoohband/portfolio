"use client"

import { ChildrenProps } from "@/lib/types";
import { useEffect, useState, createContext, useContext } from "react";

type ThemeType = "light" | "dark";
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ChildrenProps) {
  const [theme, setTheme] = useState<ThemeType>("light");



  const toggleTheme = () => {
    {
      if (theme === "light") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeType | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
  const ctx = useContext(ThemeContext);
  if(!ctx){
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return ctx;
}
