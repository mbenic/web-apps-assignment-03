"use client";
import { createContext, useContext, useState } from "react";

//set up a context and provider for for managing and toggling a theme either "light" or "dark"

//create a new context called ThemeContext which allows components to access light or dark theme
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  //Initializes the theme state with "light" as the default
  const [theme, setTheme] = useState("light");

  //switches the theme between "light" and "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    //The provider makes the current theme and toggleTheme function accessible to any component within ThemeProvider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// useTheme simplifies accessing ThemeContext values "theme" and "toggleTheme" easily from other components
// Allows any component to access the theme and toggleTheme function by calling useTheme()
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
