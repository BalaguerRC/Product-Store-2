import {
  AppBar,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeContext } from "../../App";

const Header = () => {
  //theme
  const theme = useContext(ThemeContext);

  const getToken = localStorage.getItem("Token");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const getData = JSON.parse(localStorage.getItem("DATA"));
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("a");

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
  const [carritoNumber, setCarritoNumber] = useState(0);

  const CantidadCarrito = () => {
    const getCarrito = JSON.parse(localStorage.getItem("Carrito"));
    if (getCarrito != null) {
      setCarritoNumber(getCarrito.length);
    }
  };
  //category
  const [openCategory, setOpenCategory] = useState(false);
  const [category, setCategory] = useState([]);
  const [category2, setCategory2] = useState(null);
  const [categoryByID, setcategoryById] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const GetCategory = () => {
    fetch(import.meta.env.VITE_URL + "/Categorie", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setCategory(data));
  };

  /**autocomplete */
  const [value, setValue] = useState();
  const [products, setproducts] = useState([]);
  const ProductAutoComplete = () => {
    fetch(import.meta.env.VITE_URL + "/Products/search", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setproducts(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetCategory();
    ProductAutoComplete();
  }, []);

  return (
    <div>
      <header>
        <AppBar
          position="fixed"
          //dark: , light: BF58F2
          //sx={{ background: "#2A303C" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={6}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Grid item>
                  <Button
                    href="/"
                    sx={{ fontWeight: 700, fontSize: 18, color: "#fff" }}
                  >
                    ProductS
                  </Button>
                </Grid>
                <Grid item xs>
                  <ButtonGroup
                    size="large"
                    sx={{ width: "100%" }}
                    color="secondary"
                    variant="contained"
                  >
                    <Button size="small">
                      {category2 == null ? "Filter" : category2}
                    </Button>
                    <Button size="small" onClick={handleClick}>
                      <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: 48 * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <MenuItem
                        value={null}
                        onClick={(e) => {
                          handleClose();
                          setCategory2(null);
                        }}
                      >
                        None
                      </MenuItem>
                      {category.map((option) => (
                        <MenuItem
                          key={option.id}
                          value={option.id}
                          onClick={(e) => {
                            handleClose();
                            console.log(e.target.value);
                            setCategory2(option.name);
                            setcategoryById(e.target.value);
                          }}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </Menu>
                    <Autocomplete
                      size="small"
                      disablePortal
                      variant="outlined"
                      options={products && products.map((item) => item.name)}
                      fullWidth
                      sx={{
                        background: "#F3F1F4",
                        color: "#000",
                        ".css-myb2s4-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            color: "#000",
                          },
                      }}
                      renderInput={(p) => (
                        <TextField
                          {...p}
                          label="Buscar Producto"
                          onSelect={(event, newValue) => {
                            setValue(event.target.value);
                            setName(event.target.value);
                          }}
                        />
                      )}
                    />
                    {/*<TextField
                      label={"Search"}
                      placeholder="search..."
                      size="small"
                      type="text"
                      onChange={(e) => setName(e.currentTarget.value)}
                      fullWidth
                      variant="outlined"
                      sx={{
                        background: "#F3F1F4",
                        color: "#000",
                        ".css-myb2s4-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            color: "#000",
                          },
                      }}
                    />*/}
                    <Button
                      href="#"
                      onClick={() =>
                        name == ""
                          ? navigate(
                              category2 == null
                                ? "/search/all/a"
                                : "/search/" + categoryByID + "/a"
                            )
                          : navigate(
                              category2 == null
                                ? "/search/all/" + name
                                : "/search/" + categoryByID + "/" + name
                            )
                      }
                    >
                      <SearchIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item>
                  <IconButton onClick={theme.toggleTheme}>
                    <Brightness4Icon />
                  </IconButton>
                </Grid>
                <Grid item>
                  {getToken == null ? null : (
                    <Box
                      sx={{
                        flexGrow: 0.03,
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      <IconButton
                        aria-label="cart"
                        onClick={() => navigate("carrito")}
                      >
                        <Badge badgeContent={carritoNumber} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </Box>
                  )}
                </Grid>
                <Grid item>
                  {getToken == null ? (
                    <Button
                      variant="text"
                      sx={{ borderRadius: 3, color: "#fff", fontWeight: 600 }}
                      onClick={() => {
                        setLoading(!Loading);
                        setTimeout(() => {
                          setLoading(!Loading);
                          navigate("login");
                        }, 1000);
                      }}
                    >
                      Login
                    </Button>
                  ) : (
                    <>
                      <>
                        <Tooltip title="Opciones">
                          <IconButton
                            onClick={handleOpenUserMenu}
                            sx={{ p: 0 }}
                          >
                            <Avatar alt="Remy Sharp">
                              {getData.name.substr(0, 1)}
                            </Avatar>
                          </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{
                            mt: "45px",
                            "& .MuiPaper-root": {
                              background: "#242933",
                            },
                          }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          <MenuItem
                            onClick={() => {
                              handleCloseUserMenu();
                              navigate("profile");
                            }}
                          >
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <Typography textAlign="center">Perfil</Typography>
                          </MenuItem>
                          <Divider />
                          <MenuItem
                            onClick={() => {
                              setLoading(!Loading);
                              Logout();
                            }}
                          >
                            <ListItemIcon>
                              <LogoutIcon />
                            </ListItemIcon>
                            <Typography textAlign="center">
                              Cerrar sesion
                            </Typography>
                          </MenuItem>
                        </Menu>
                      </>
                    </>
                  )}
                </Grid>
              </Grid>
              <Grid
                container
                direction={"column"}
                justifyContent={"center"}
                sx={{
                  display: { xs: "flex", md: "none" },
                  pb: 1,
                }}
              >
                <Grid item>
                  <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <IconButton
                        size="large"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      >
                        =
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Button>ProductS</Button>
                    </Grid>
                    <Grid item>
                      {getToken == null ? (
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => {
                            setLoading(!Loading);
                            setTimeout(() => {
                              setLoading(!Loading);
                              navigate("login");
                            }, 1000);
                          }}
                        >
                          Login
                        </Button>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonGroup size="large" sx={{ width: "100%" }}>
                    <TextField
                      label={"Search"}
                      placeholder="search..."
                      size="small"
                      type="text"
                      fullWidth
                    />
                    <Button>
                      <SearchIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

{
  /**
    <AppBar position="fixed" sx={{ background: "#2A303C" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography //tittle
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ProductS
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  =
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiPaper-root": {
                      background: "#242933",
                    },
                  }}
                >
                  <MenuItem onClick={() => navigate("products")}>
                    <IconButton>
                      <ShoppingCartIcon />
                    </IconButton>
                    Productos
                  </MenuItem>
                  {getToken == null ? null : (
                    <MenuItem onClick={() => navigate("carrito")}>
                      <IconButton>
                        <ShoppingCartIcon />
                      </IconButton>
                      Carrito
                    </MenuItem>
                  )}
                  <Divider />
                  <MenuItem onClick={() => navigate("products")}>
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                    About
                  </MenuItem>
                </Menu>
              </Box>
              <Typography //tittle
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ProductS
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 550,
                  }}
                  href="/products"
                >
                  Productos
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 550,
                  }}
                  disabled
                >
                  About
                </Button>
              </Box>
              {getToken == null ? null : (
                <Box
                  sx={{ flexGrow: 0.03, display: { xs: "none", md: "flex" } }}
                >
                  <IconButton
                    aria-label="cart"
                    onClick={() => navigate("carrito")}
                  >
                    <Badge badgeContent={carritoNumber} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Box>
              )}

              <Box sx={{ flexGrow: 0 }}>
                {getToken == null ? (
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setLoading(!Loading);
                      setTimeout(() => {
                        setLoading(!Loading);
                        navigate("login");
                      }, 1000);
                    }}
                  >
                    Login
                  </Button>
                ) : (
                  <>
                    <Tooltip title="Opciones">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp">
                          {getData.name.substr(0, 1)}
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{
                        mt: "45px",
                        "& .MuiPaper-root": {
                          background: "#242933",
                        },
                      }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem
                        onClick={() => {
                          handleCloseUserMenu();
                          navigate("profile");
                        }}
                      >
                        <ListItemIcon>
                          <AccountCircleIcon />
                        </ListItemIcon>
                        <Typography textAlign="center">Perfil</Typography>
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={() => {
                          setLoading(!Loading);
                          Logout();
                        }}
                      >
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                        <Typography textAlign="center">
                          Cerrar sesion
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
     */
}

export default Header;
