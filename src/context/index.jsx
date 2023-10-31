import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ child }) => {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={[darkMode, setdarkMode]}>
      {child}
    </ThemeContext.Provider>
  );
};
