import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { ThemeContext } from "../pages/test";

const TestTheme = () => {
  const theme = useContext(ThemeContext);
  console.log("desde testtheme",theme.theme);
  return (
    <div>
      <Box sx={{ width: 200, height: 200, background: theme.theme ==="light" ? "#fff" :"#000" }}></Box>
      darkMode
      <Button onClick={theme.toggleTheme}>Change</Button>
    </div>
  );
};

export default TestTheme;
