import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import Products from "../../components/products/products";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container direction={"row"} justifyContent={"space-between"}>
        <Grid item xs={2.5} sx={{ p: 4 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Typography variant="h5" gutterBottom sx={{fontWeight: 700}}>
              Categories
            </Typography>
            <Divider />
            <Button
              href="/search/all" /*onClick={() => navigate("/search/all")}*/
            >
              <Typography variant="caption">All</Typography>
            </Button>
            <Button href="/search/video_games" /*onClick={() => navigate("")}*/>
              <Typography variant="caption">Video Games</Typography>
            </Button>
            <Button href="#" onClick={() => navigate("/search/clothes")}>
              <Typography variant="caption">Clothes</Typography>
            </Button>
            <Button href="#" onClick={() => navigate("/search/shoes")}>
              <Typography variant="caption">Shoes</Typography>
            </Button>
            <Button href="#" onClick={() => navigate("/search/electrics")}>
              <Typography variant="caption">Electrics</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={9.5}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;

export const RedirectSearch = () => {
  return <Navigate to={"/search/all"} replace={true}/>;
};
