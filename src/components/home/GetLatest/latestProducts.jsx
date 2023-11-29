import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import desconocido from "../../../assets/signo.png";
import { ThemeContext } from "../../../App";

const productS = [
  {
    id: 1,
    name: "test1",
    price: 200,
    image: desconocido,
  },
  {
    id: 2,
    name: "test2",
    price: 200,
    image: desconocido,
  },
  {
    id: 3,
    name: "test3",
    price: 200,
    image: desconocido,
  },
  {
    id: 4,
    name: "test4",
    price: 200,
    image: desconocido,
  },
  {
    id: 5,
    name: "test5",
    price: 200,
    image: desconocido,
  },
];
const LatestProducts = () => {
  const theme = useContext(ThemeContext);
  const [latestProducts, setlatestProducts] = useState([]);
  const GetLatestProduct = async () => {
    await fetch(import.meta.env.VITE_URL + "/LatestProducts", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setlatestProducts(data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    //GetProduct();
    GetLatestProduct();
  }, []);
  //010A26
  return (
    <Box
      sx={{ backgroundColor: theme.theme === "light" ? "#F0F0F0" : "#010A26" }}
      //light : F0F0F0 ,dark:010A26
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                <Link href="/search/all" underline="hover">
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
              {latestProducts == 0
                ? productS.map((data) => (
                    <Grid item key={data.id}>
                      <Card
                        sx={{ maxWidth: 235, maxHeight: 400, borderRadius: 5 }}
                      >
                        <CardMedia>
                          <img
                            src={data.image}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 5,
                            }}
                          />
                        </CardMedia>
                        <CardContent sx={{ p: 2 }}>
                          <Box display={"flex"}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
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
                        <CardActions
                          sx={{ justifyContent: "space-between", p: 2 }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            RD$ {data.price}
                          </Typography>
                          <Button variant="contained" sx={{ borderRadius: 3 }}>
                            View
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                : null}
              {latestProducts?.map((data, index) => (
                <Grid item key={index} sx={{ flexGrow: 1 }} xs>
                  <Card sx={{ maxWidth: 285, maxHeight: 400, borderRadius: 5 }}>
                    <CardMedia
                      sx={{ height: 240 }}
                      image={data.image == null ? desconocido : data.image}
                      title={data.name}
                    ></CardMedia>
                    <CardContent sx={{ p: 2 }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          noWrap
                        >
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
                      <Button
                        variant="contained"
                        sx={{ borderRadius: 3 }}
                        href={"/searchP/details/" + data.id}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                <Link href="/search/all" underline="hover">
                  View More
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={"row"}
              justifyContent={"space-around"}
              spacing={2}
              alignItems={"center"}
            >
              {latestProducts == 0
                ? productS.map((data) => (
                    <Grid item key={data.id}>
                      <Card
                        sx={{ maxWidth: 190, maxHeight: 300, borderRadius: 5 }}
                      >
                        <CardMedia>
                          <img
                            src={data.image}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 5,
                            }}
                          />
                        </CardMedia>
                        <CardContent sx={{ p: 2 }}>
                          <Box display={"flex"}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
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
                        <CardActions
                          sx={{ justifyContent: "space-between", p: 2 }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            RD$ {data.price}
                          </Typography>
                          <Button variant="contained" sx={{ borderRadius: 3 }}>
                            View
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                : null}
              {latestProducts?.map((data, index) => (
                <Grid item key={index}>
                  <Card sx={{ maxWidth: 190, maxHeight: 300, borderRadius: 5 }}>
                    <CardMedia
                      sx={{ height: 150 }}
                      image={data.image == null ? desconocido : data.image}
                      title={data.name}
                    ></CardMedia>
                    <CardContent sx={{ p: 2 }}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          noWrap
                        >
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
                      <Button
                        variant="contained"
                        sx={{ borderRadius: 3 }}
                        href={"/searchP/details/" + data.id}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LatestProducts;
