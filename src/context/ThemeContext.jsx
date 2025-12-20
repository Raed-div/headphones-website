import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
