import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import ProductItem from "./productItem";

const Products = () => {
  const [Product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [Error, seTError] = useState(false);
  const [Loading, setLoading] = useState(false);

  const getToken = localStorage.getItem("Token");
  const response = async () => {
    //setLoading(false)
    await fetch(import.meta.env.VITE_URL + "/ProductsPag/getProductClient", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data.data);
        setTotalPage(data.totalPages);
      })
      .catch((err) => {
        console.log(err);
        seTError(!Error);
      });
  };

  useEffect(() => {
    response();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const navigate = useNavigate();

  //pagination

  const CurrentPage = async (value) => {
    await fetch(
      `${
        import.meta.env.VITE_URL
      }/ProductsPag/getProductClient?pageNumber=${value}&pageSize=12`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getToken,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
    CurrentPage(value);
  };

  //dialog
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  //end

  const [value, setValue] = useState();
  //category
  const [category, setCategory] = useState([]);
  const [category2, setCategory2] = useState("");

  const GetCategory = async () => {
    await fetch(import.meta.env.VITE_URL + "/Categories", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setCategory(data));
  };
  useEffect(() => {
    GetCategory();
  }, []);

  const handleChangeCategory = (e) => {
    console.log(e.target);
    setCategory2(e.target.value);
    Filter(e.target.value);
  };

  const Filter = async (idcategory) => {
    if (idcategory === null) {
      response();
    } else {
      await fetch(import.meta.env.VITE_URL + "/ProductsById/" + idcategory, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log("data: "+data.data)
          if (JSON.stringify(data.data) == undefined) {
            console.log("Not Found");
            alert("No hay productos en esta categoria");
            response();
          } else {
            console.log(data.data);
            setProduct(data.data);
            setTotalPage(1);
          }
        })
        .catch((err) => console.log("Error: " + err));
    }
  };

  const Search = async () => {
    //setvalue
    //http://localhost:5081/api/ProductsPag
    if (value != null) {
      console.log(value);
      await fetch(import.meta.env.VITE_URL + "/ProductsPag/" + value, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.data != 0) {
            navigate(`details/${data.data}`);
          } else {
            alert("Producto no encontrado");
          }
        })
        .catch((err) => console.log(err));
    }

    //console.log("valor: " +value)
  };

  return (
    <>
      <div>
        <Box pt={2}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Container>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                <Button variant="text" onClick={() => navigate("/")}>
                  {"< - "}
                </Button>
                Productos
              </Typography>

              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Breadcrumbs separator=">" aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    color="inherit"
                    href=""
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Link>
                  <Typography color="text.primary">Productos</Typography>
                </Breadcrumbs>
              </Grid>

              <Grid
                container
                direction={"row"}
                justifyContent={"right"}
                alignItems={"center"}
              >
                {/**category */}
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    onChange={handleChangeCategory}
                    value={category2}
                    autoWidth
                  >
                    <MenuItem value={null}>None</MenuItem>
                    {category &&
                      category.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>

                {/**search */}
                <Autocomplete
                  disablePortal
                  id="controllable-states-demo"
                  options={Product && Product.map((item) => item.name)}
                  sx={{ width: 300 }}
                  renderInput={(p) => (
                    <TextField
                      {...p}
                      label="Buscar Producto"
                      onChange={(event, newValue) => {
                        console.log(event.target.value);
                      }}
                      onSelect={(event, newValue) => {
                        setValue(event.target.value);
                      }}
                    />
                  )}
                />

                <IconButton aria-label="cart" onClick={() => Search()}>
                  <SearchIcon />
                </IconButton>
              </Grid>

              <Divider sx={{ mt: 1 }} />

              <Box paddingTop={2} justifyContent="center">
                <Grid container item spacing={3}>
                  {Product &&
                    Product.map((item, value) => {
                      return (
                        <Grid item xs={6} md={3} key={item.id}>
                          {Loading ? (
                            <Stack
                              spacing={1}
                              sx={{ maxWidth: 345, minWidth: 100 }}
                            >
                              <Skeleton variant="rounded" height={140} />
                              <Skeleton variant="rectangular" width={110} />
                              <Skeleton variant="rounded" width={110} />
                            </Stack>
                          ) : (
                            <ProductItem
                              id={item.id}
                              name={item.name}
                              price={item.precio}
                              category={item.category}
                              image={item.image}
                            />
                          )}
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </Container>
            <Stack marginTop={2} marginBottom={2}>
              <Pagination
                sx={{
                  ".css-1nihme9-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                    {
                      background: "#661AE6",
                      color: "white",
                    },
                  "& .Mui-selected:hover": {
                    background: "#8146eb",
                    color: "white",
                  },
                }}
                color="secondary"
                size="large"
                count={totalPage}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Grid>
        </Box>
        <Snackbar
          open={Error ? open : null}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert variant="filled" severity="warning">
            Token Expirado
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Products;
