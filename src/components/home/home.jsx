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
      <Header/>
      <Grid
        paddingTop={9}
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Outlet />
      </Grid>
      <footer style={{ height: "100%" }}>
        <Box sx={{ textAlign: "center", position: "static" }}>
          <Typography variant="h7">
            Copyright © 2023 - All right reserved by NOTHING
          </Typography>
        </Box>
      </footer>
    </div>
  );
};

export default Home;
