import {
  AppBar,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./header";

export const CarritoCantidad = 0;

const Home = () => {
  const getToken = localStorage.getItem("Token");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [Loading, setLoading] = useState(false);

  const getData = JSON.parse(localStorage.getItem("DATA"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const Logout = () => {
    setTimeout(() => {
      setLoading(Loading);
      localStorage.removeItem("Token");
      localStorage.removeItem("DATA");
      localStorage.removeItem("Carrito");
      navigate("/login");
    }, 1500);
  };

  const [carritoNumber, setCarritoNumber] = useState(0);

  const CantidadCarrito = () => {
    const getCarrito = JSON.parse(localStorage.getItem("Carrito"));
    if (getCarrito != null) {
      setCarritoNumber(getCarrito.length);
    }
  };
  useEffect(() => {
    CantidadCarrito();
  }, []);
  return (
    <div>
      <Header />

      <Grid
        paddingTop={9}
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Outlet />
      </Grid>

      <Box
        sx={{
          display: { xs: "none", md: "grid" },
        }}
      >
        <footer style={{ height: "100%", padding: 10 }}>
          <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            spacing={20}
            p={2}
          >
            <Grid item>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h6"
                  color={"text.secondary"}
                  fontWeight={800}
                  gutterBottom
                >
                  Categorys
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  VideoGames
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Electronics
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Shoes
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Clothes
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h6"
                  color={"text.secondary"}
                  fontWeight={800}
                  gutterBottom
                >
                  Company
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  About us
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Contact
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h6"
                  color={"text.secondary"}
                  fontWeight={800}
                  gutterBottom
                >
                  Legal
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Terms of use
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Privacy Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", position: "static" }}>
            <Typography fontWeight={600}>
              Copyright © 2023 - All right reserved by NOTHING
            </Typography>
          </Box>
        </footer>
      </Box>

      <Box
        sx={{
          display: { xs: "grid", md: "none" },
        }}
      >
        <footer style={{ height: "100%", padding: 10 }}>
          <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            spacing={5}
            p={5}
          >
            <Grid item>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h6"
                  color={"text.secondary"}
                  fontWeight={800}
                  gutterBottom
                >
                  Categorys
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  VideoGames
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Electronics
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Shoes
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Clothes
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h6"
                  color={"text.secondary"}
                  fontWeight={800}
                  gutterBottom
                >
                  Company
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  About us
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Contact
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h6"
                  color={"text.secondary"}
                  fontWeight={800}
                  gutterBottom
                >
                  Legal
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Terms of use
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  Privacy Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", position: "static" }}>
            <Typography fontWeight={600}>
              Copyright © 2023 - All right reserved by NOTHING
            </Typography>
          </Box>
        </footer>
      </Box>
    </div>
  );
};

{
  /**
  <Box sx={{ textAlign: "center", position: "static" }}>
          <Typography variant="h7">
            Copyright © 2023 - All right reserved by NOTHING
          </Typography>
        </Box>
   */
}
export default Home;
