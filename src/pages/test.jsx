import React, { createContext, useState } from "react";

import TestTheme from "../components/testTheme";

export const ThemeContext = createContext(null);

function Test() {
  const [theme, settheme] = useState("light");

  const toggleTheme = () => {
    settheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  console.log("desde test");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <TestTheme />
    </ThemeContext.Provider>
  );
}

export default Test;
