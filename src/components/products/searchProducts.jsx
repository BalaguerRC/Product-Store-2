import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import desconocido from "../../assets/signo.png";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ProductItem from "./productItem";

const Product = [
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
const SearchProducts = () => {
  const { category, name } = useParams();
  const [Loading, setLoading] = useState(false);

  const GetSearch = () => {
    console.log("name", name, "category:", category);
  };

  useEffect(() => {
    setLoading(true);
    GetSearch();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [name]);
  
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
            <Grid container direction={"row"} spacing={1}>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  Category: <Typography variant="button">{category}</Typography>{" "}
                  and
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  Name: <Typography variant="button">{name}</Typography>
                </Typography>
              </Grid>
            </Grid>

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
              count={2}
              page={1}
            />
          </Stack>
        </Grid>
      </Box>
    </div>
  );
};

export default SearchProducts;
