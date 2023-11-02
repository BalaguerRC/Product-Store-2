import React, { useContext } from "react";
import { Box, Button, Divider, Drawer } from "@mui/material";
import { ThemeContext } from "../pages/test";

const TestTheme = () => {
  const theme = useContext(ThemeContext);
  console.log("desde testtheme", theme.theme);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log("este es ", anchor, open);
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Button onClick={theme.toggleTheme}>Change</Button>
      <Divider />
      <Button>Drawer</Button>
    </Box>
  );
  return (
    <div>
      <Box
        sx={{
          width: 200,
          height: 200,
          background: theme.theme === "light" ? "#fff" : "#000",
        }}
      ></Box>
      darkMode
      <Button onClick={theme.toggleTheme}>Change</Button>
      <Button onClick={toggleDrawer("right", true)}>Drawer</Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TestTheme;
