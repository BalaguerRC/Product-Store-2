import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import desconocido from "../../assets/signo.png";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ProductItem from "./productItem";

const Product1 = [
  {
    id: 1,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 2,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 3,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 4,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 5,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 6,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 7,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 8,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 9,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 10,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 11,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
  {
    id: 12,
    name: "test1",
    price: 200,
    category: "test",
    image: desconocido,
  },
];
const ProductsByCategory = () => {
  const { category } = useParams();
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [link, setLink] = useState(null);

  const response = () => {
    fetch(import.meta.env.VITE_URL + "/ProductsPag/getProductClient", {
      method: "GET",
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

  const Filter = (idcategory) => {
    if (idcategory != undefined) {
      fetch(import.meta.env.VITE_URL + "/ProductsByIdPage/" + idcategory, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (JSON.stringify(data.data) == undefined) {
            console.log("Not Found");
            response();
          } else {
            setProduct(data.data);
            setPage(1);
            setTotalPage(data.totalPages);
            setLink("/ProductsByIdPage/" + idcategory);
          }
        })
        .catch((err) => console.log("Error: " + err));
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    Filter(
      category == "video_games"
        ? 10010
        : category == "clothes"
        ? 10011
        : category == "shoes"
        ? 10009
        : category == "electrics"
        ? 10006
        : navigate("/search/all")
    );
    setLoading(true);
    category == "all" ? response() : null;
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [category]);
  const CurrentPage = (value) => {
    fetch(
      `${import.meta.env.VITE_URL}${
        link == null ? "/ProductsPag/getProductClient" : link
      }?pageNumber=${value}&pageSize=12`,
      {
        method: "GET",
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

  return (
    <div>
      <Box pt={2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Container>
            <Typography variant="h5" gutterBottom>
              Category: <Typography variant="button">{category}</Typography>
            </Typography>
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
                {Product.length == 0 ? (
                  <Grid
                    container
                    direction={"row"}
                    justifyContent={"center"}
                    pt={5}
                    pb={5}
                  >
                    <Grid item xs sx={{ textAlign: "center" }}>
                      <Paper sx={{ p: 5 }} variant="outlined">
                        <Typography gutterBottom>
                          There are no products
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Box>
          </Container>
          {Product.length == 0 ? (
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
                count={1}
                page={1}
                disabled
              />
            </Stack>
          ) : (
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
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsByCategory;
