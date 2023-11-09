"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ childern }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  return <ThemeContext.Provider value={{theme}}> {childern} </ThemeContext.Provider>;
};
