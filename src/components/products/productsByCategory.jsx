import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import desconocido from "../../assets/signo.png";
import { Box, Container, Grid, Pagination, Skeleton, Stack, Typography } from "@mui/material";
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
const ProductsByCategory = () => {
  const { category } = useParams();

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
            <Typography variant="h5" gutterBottom>Category: <Typography variant="button" >{category}</Typography></Typography>
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
                            price={item.price}
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

export default ProductsByCategory;
