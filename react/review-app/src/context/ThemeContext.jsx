import { createContext, useState } from "react";
import { useEffect } from "react";

  const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);


  const toggleTheme = () => {
    setDarkMode((prev)=>!prev);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;