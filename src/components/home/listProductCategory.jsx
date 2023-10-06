import {
  Alert,
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  ListSubheader,
  Snackbar,
  Typography,
} from "@mui/material";
import desconocido from "../../assets/signo.png";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const productS = [
  {
    id: 1,
    name: "test1",
    price: 200,
    img: desconocido,
  },
  {
    id: 2,
    name: "test2",
    price: 200,
    img: desconocido,
  },
  {
    id: 3,
    name: "test3",
    price: 200,
    img: desconocido,
  },
  {
    id: 4,
    name: "test4",
    price: 200,
    img: desconocido,
  },
  {
    id: 5,
    name: "test5",
    price: 200,
    img: desconocido,
  },
];

const productS2 = [
  {
    id: 1,
    name: "test1",
    price: 200,
    img: desconocido,
  },
  {
    id: 2,
    name: "test2",
    price: 200,
    img: desconocido,
  },
  {
    id: 3,
    name: "test3",
    price: 200,
    img: desconocido,
  },
  {
    id: 4,
    name: "test4",
    price: 200,
    img: desconocido,
  },
];

const ListProductCategory = () => {
  const getToken = localStorage.getItem("Token");

  const [open, setOpen] = useState(true);

  const [Error, seTError] = useState(false);
  const [image, setImage] = useState([]);

  const [image1, setImage1] = useState([]);
  const [category1, setCategory1] = useState(null);

  const [image2, setImage2] = useState([]);
  const [category2, setCategory2] = useState(null);

  const [Loading, setLoading] = useState(false);

  const GetProduct = async () => {
    await fetch(import.meta.env.VITE_URL + "/Products", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setImage(data))
      .catch((err) => {
        seTError(!Error);
      });

    await fetch(import.meta.env.VITE_URL + "/ProductsById/1", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImage1(data.data);
        setCategory1(data.category);
      });

    await fetch(import.meta.env.VITE_URL + "/ProductsById/10006", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImage2(data.data);
        setCategory2(data.category);
      });
  };

  useEffect(() => {
    GetProduct();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ backgroundColor: "#22414B" }}>
        <Grid container direction={"column"} p={7} spacing={4}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Latest Products
              </Typography>
              <Button variant="text">
                <Link href="#" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={"row"}
              justifyContent={"center"}
              spacing={4}
              alignItems={"center"}
            >
              {productS.map((data) => (
                <Grid item key={data.id}>
                  <Card sx={{ maxWidth: 235, maxHeight: 400, borderRadius: 5 }}>
                    <CardMedia>
                      <img
                        src={data.img}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </CardMedia>
                    <CardContent sx={{p:2}}>
                      <Box display={"flex"}>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.name}
                        </Typography>
                        <Chip
                          label={"new"}
                          color="secondary"
                          sx={{ ml: 2 }}
                          size="small"
                        />
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        RD$ {data.price}
                      </Typography>
                      <Button variant="contained" sx={{ borderRadius: 3 }}>
                        Buy
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container direction={"column"} p={7} spacing={4}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Video Games
              </Typography>
              <Button variant="text">
                <Link href="#" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={"row"}
              justifyContent={"center"}
              spacing={4}
              alignItems={"center"}
            >
              {productS.map((data) => (
                <Grid item key={data.id}>
                  <Card sx={{ maxWidth: 235, maxHeight: 400, borderRadius: 5 }}>
                    <CardMedia>
                      <img
                        src={data.img}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </CardMedia>
                    <CardContent sx={{p:2}}>
                      <Box display={"flex"}>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.name}
                        </Typography>
                        <Chip
                          label={"new"}
                          color="secondary"
                          sx={{ ml: 2 }}
                          size="small"
                        />
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        RD$ {data.price}
                      </Typography>
                      <Button variant="contained" sx={{ borderRadius: 3 }}>
                        Buy
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "#22414B" }}>
        <Grid
          container
          direction={"row"}
          p={7}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Electronics
              </Typography>
              <Button variant="text">
                <Link href="#" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>

            <ImageList
              sx={{ width: "auto", maxWidth: 410, maxHeight: 420,height:"100%" }}
              cols={2}
            >
              {productS2.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${
                      item.img == null ? "/src/assets/signo.png" : item.img
                    }?w=248&fit=crop&auto=format`}
                    srcSet={`${
                      item.img == null ? "/src/assets/signo.png" : item.img
                    }?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Clothes
              </Typography>
              <Button variant="text">
                <Link href="#" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>

            <ImageList
              sx={{ width: "auto", maxWidth: 410, maxHeight: 420,height:"100%" }}
              cols={2}
            >
              {productS2.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${
                      item.img == null ? "/src/assets/signo.png" : item.img
                    }?w=248&fit=crop&auto=format`}
                    srcSet={`${
                      item.img == null ? "/src/assets/signo.png" : item.img
                    }?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Shoes
              </Typography>
              <Button variant="text">
                <Link href="#" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>

            <ImageList
              sx={{ width: "auto", maxWidth: 410, maxHeight: 420,height:"100%"  }}
              cols={2}
            >
              {productS2.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${
                      item.img == null ? "/src/assets/signo.png" : item.img
                    }?w=248&fit=crop&auto=format`}
                    srcSet={`${
                      item.img == null ? "/src/assets/signo.png" : item.img
                    }?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={Error ? open : null}
        autoHideDuration={5000}
        onClose={() => setOpen(!open)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert variant="filled" severity="warning">
          Token Expirado
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#7eb8cf", zIndex: (theme) => theme.zIndex.drawer }}
        open={Loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

{
  /**
  <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          p: 7,
          margin: "auto",
          maxWidth: 1100,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={5}>
          <Grid item marginRight={1.8}>
            <Box sx={{ maxWidth: 488, maxHeight: 328, paddingTop: 2 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontSize: "3rem", fontWeight: 550 }}
              >
                Categoria
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs sm container>
            {image1 == null ? null : (
              <Grid item xs container direction="column">
                <Grid item xs>
                  <ImageList
                    sx={{
                      width: "auto",
                      maxWidth: 500,
                      minWidth: 200,
                      height: 300,
                    }}
                    cols={2}
                  >
                    <ImageListItem key="Subheader" cols={2}>
                      <ListSubheader component="div">{category1}</ListSubheader>
                    </ImageListItem>
                    {image1 &&
                      image1.map((item) => (
                        <ImageListItem key={item.id}>
                          <img
                            src={`${
                              item.image == null ? desconocido : item.image
                            }?w=248&fit=crop&auto=format`}
                            srcSet={`${
                              item.image == null ? desconocido : item.image
                            }?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title={item.name}
                            subtitle={item.author}
                            actionIcon={
                              <IconButton
                                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                aria-label={`info about ${item.name}`}
                                onClick={() => {
                                  setLoading(!Loading);
                                  setTimeout(() => {
                                    setLoading(!Loading);
                                    navigate("/products/details/" + item.id);
                                  }, 1000);
                                }}
                              >
                                <InfoIcon />
                              </IconButton>
                            }
                          />
                        </ImageListItem>
                      ))}
                  </ImageList>
                </Grid>
              </Grid>
            )}

            {image2 == null ? (
              <>Holaaaaaaa </>
            ) : (
              <Grid item xs container direction="column">
                <Grid item xs>
                  <ImageList
                    sx={{
                      width: "auto",
                      maxWidth: 500,
                      minWidth: 200,
                      height: 300,
                    }}
                  >
                    <ImageListItem key="Subheader" cols={2}>
                      <ListSubheader component="div">{category2}</ListSubheader>
                    </ImageListItem>
                    {image2 &&
                      image2.map((item) => (
                        <ImageListItem key={item.id}>
                          <img
                            src={`${
                              item.image == null ? desconocido : item.image
                            }?w=248&fit=crop&auto=format`}
                            srcSet={`${
                              item.image == null ? desconocido : item.image
                            }?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title={item.name}
                            subtitle={item.author}
                            actionIcon={
                              <IconButton
                                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                aria-label={`info about ${item.name}`}
                                onClick={() => {
                                  setLoading(!Loading);
                                  setTimeout(() => {
                                    setLoading(!Loading);
                                    navigate("/products/details/" + item.id);
                                  }, 1000);
                                }}
                              >
                                <InfoIcon />
                              </IconButton>
                            }
                          />
                        </ImageListItem>
                      ))}
                  </ImageList>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={Error ? open : null}
        autoHideDuration={5000}
        onClose={() => setOpen(!open)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert variant="filled" severity="warning">
          Token Expirado
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#7eb8cf", zIndex: (theme) => theme.zIndex.drawer }}
        open={Loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
   */
}
export default ListProductCategory;
