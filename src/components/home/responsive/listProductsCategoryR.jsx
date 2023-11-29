import React, { useContext, useEffect, useState } from "react";
import LatestProducts from "../GetLatest/latestProducts";
import LatestVideoGames from "../GetLatest/latestVideoGames";
import desconocido from "../../../assets/signo.png";
import InfoIcon from "@mui/icons-material/Info";
import { ThemeContext } from "../../../App";
import {
  Box,
  Button,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
} from "@mui/material";

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

const ListProductsCategoryR = () => {
  const theme = useContext(ThemeContext);
  const getToken = localStorage.getItem("Token");

  const [open, setOpen] = useState(true);

  const [Error, seTError] = useState(false);
  const [image, setImage] = useState([]);

  const [image1, setImage1] = useState([]);
  const [category1, setCategory1] = useState(null);

  const [image2, setImage2] = useState([]);
  const [category2, setCategory2] = useState(null);

  const [Loading, setLoading] = useState(false);

  const [latestElectronics, setlatestElectronics] = useState([]);
  const getLatestElectronics = () => {
    fetch(import.meta.env.VITE_URL + "/LatestProducts/electronics", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setlatestElectronics(data);
      })
      .catch((err) => console.log(err));
  };
  const [latestShoes, setlatestShoes] = useState([]);
  const getLatestShoes = () => {
    fetch(import.meta.env.VITE_URL + "/LatestProducts/shoes", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setlatestShoes(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLatestElectronics();
    getLatestShoes();
  }, []);
  return (
    <div>
      <LatestProducts />

      <LatestVideoGames />

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: theme.theme === "light" ? "#F0F0F0" : "#010A26",
        }}
        //light : F0F0F0 ,dark:010A26
      >
        <Grid
          container
          direction={"row"}
          p={7}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
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
                <Link href="search/electrics" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>

            <ImageList
              sx={{
                width: "auto",
                maxWidth: 500,
                maxHeight: 510,
                height: "100%",
              }}
              cols={2}
            >
              {latestElectronics == 0
                ? productS2.map((item) => (
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
                        style={{ borderRadius: 20 }}
                      />
                      <ImageListItemBar
                        sx={{
                          borderRadius: 5,
                          borderStartEndRadius: 0,
                          borderStartStartRadius: 0,
                        }}
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
                  ))
                : null}
              {latestElectronics?.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${
                      item.image == null ? "/src/assets/signo.png" : item.image
                    }?w=248&fit=crop&auto=format`}
                    srcSet={`${
                      item.image == null ? "/src/assets/signo.png" : item.image
                    }?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    style={{ borderRadius: 20 }}
                  />
                  <ImageListItemBar
                    title={item.name}
                    sx={{
                      borderRadius: 5,
                      borderStartEndRadius: 0,
                      borderStartStartRadius: 0,
                    }}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                        href={"/searchP/details/" + item.id}
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
                <Link href="/search/clothes" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>

            <ImageList
              sx={{
                width: "auto",
                maxWidth: 500,
                maxHeight: 510,
                height: "100%",
              }}
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
                    style={{ borderRadius: 20 }}
                  />
                  <ImageListItemBar
                    title={item.name}
                    sx={{
                      borderRadius: 5,
                      borderStartEndRadius: 0,
                      borderStartStartRadius: 0,
                    }}
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
                <Link href="/search/shoes" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>

            <ImageList
              sx={{
                width: "auto",
                maxWidth: 500,
                maxHeight: 510,
                height: "100%",
              }}
              cols={2}
            >
              {latestShoes == 0
                ? productS2.map((item) => (
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
                        style={{ borderRadius: 20 }}
                      />
                      <ImageListItemBar
                        title={item.name}
                        sx={{
                          borderRadius: 5,
                          borderStartEndRadius: 0,
                          borderStartStartRadius: 0,
                        }}
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
                  ))
                : null}
              {latestShoes?.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${
                      item.image == null ? "/src/assets/signo.png" : item.image
                    }?w=248&fit=crop&auto=format`}
                    srcSet={`${
                      item.image == null ? "/src/assets/signo.png" : item.image
                    }?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    style={{ borderRadius: 20 }}
                  />
                  <ImageListItemBar
                    title={item.name}
                    sx={{
                      borderRadius: 5,
                      borderStartEndRadius: 0,
                      borderStartStartRadius: 0,
                    }}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                        href={"/searchP/details/" + item.id}
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
    </div>
  );
};

export default ListProductsCategoryR;
