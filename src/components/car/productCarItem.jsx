import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import desconocido from "../../assets/signo.png";

const ProductCarItem = ({ id, name, price, image }) => {
  const navigate = useNavigate();

  return (
    <>
      <CardActionArea href={"/products/details/" + id}>
        <CardMedia
          component="img"
          sx={{ height: 280 }}
          image={image == null ? desconocido : image}
          alt="green iguana"
        />
        <CardContent>
          <Box>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography gutterBottom variant="h5" component="div" noWrap>
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  ${price}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </>
  );
};
export default ProductCarItem;

{
  /**
    <CardActionArea onClick={() => navigate("/products/details/" + id)}>
            <CardMedia
                component="img"
                height="140"
                image={image == null ? desconocido : image}
                alt="green iguana"
            />
            <CardContent>
                <Box sx={{ my: 0.1, mx: 0 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h6" component="div">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                ${price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />
            </CardContent>
        </CardActionArea>
     */
}
