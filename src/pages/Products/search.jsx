import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
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
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Categories
            </Typography>
            <Divider />
            <Button onClick={() => navigate("/search/all")}>
              <Typography variant="caption">All</Typography>
            </Button>
            <Button onClick={() => navigate("/search/video_games")}>
              <Typography variant="caption">Video Games</Typography>
            </Button>
            <Button onClick={() => navigate("/search/clothes")}>
              <Typography variant="caption">Clothes</Typography>
            </Button>
            <Button onClick={() => navigate("/search/shoes")}>
              <Typography variant="caption">Shoes</Typography>
            </Button>
            <Button onClick={() => navigate("/search/electrics")}>
              <Typography variant="caption">Electrics</Typography>
            </Button>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Price
            </Typography>
            <Divider />
            <Button disabled>
              <Typography variant="caption">Menos de $100</Typography>
            </Button>
            <Button disabled>
              <Typography variant="caption">$100 - $200</Typography>
            </Button>
            <Button disabled>
              <Typography variant="caption">$200 - $300</Typography>
            </Button>
            <Button disabled>
              <Typography variant="caption">$400 - $500</Typography>
            </Button>
            <Button disabled>
              <Typography variant="caption">Mas de $500</Typography>
            </Button>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
              Reviews
            </Typography>
            <Divider />
            <Button >
              <Rating name="read-only" value={5} readOnly disabled />
            </Button>
            <Button>
              <Rating name="read-only" value={4} readOnly disabled />
            </Button>
            <Button>
              <Rating name="read-only" value={3} readOnly disabled/>
            </Button>
            <Button>
              <Rating name="read-only" value={2} readOnly disabled/>
            </Button>
            <Button>
              <Rating name="read-only" value={1} readOnly disabled/>
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
  return <Navigate to={"/search/all"} replace={true} />;
};
