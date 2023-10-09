import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import desconocido from "../../assets/signo.png";

const ProductItem = ({ id, name, price, category, image }) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid item>
        <Card
          sx={{
            maxWidth: 335,
            maxHeight: 500,
            borderRadius: 5,
          }}
        >
          <CardMedia
            sx={{ height: 280 }}
            image={image == null ? desconocido : image}
            title="green iguana"
          >
            {/*<ImageListItem>
              <img
                src={image == null ? desconocido : image}
                style={{
                  borderRadius: 5,
                }}
              />
            </ImageListItem>*/}
          </CardMedia>
          <CardContent sx={{ p: 2 }}>
            <Box display={"flex"}>
              <Typography gutterBottom variant="h5" component="div" noWrap>
                {name}
              </Typography>
              <Chip
                label={category}
                color="secondary"
                sx={{ ml: 2 }}
                size="small"
              />
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              RD$ {price}
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: 3 }}
              href={"/searchP/details/" + id}
            >
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

{
  /**
  <Card
        sx={{ maxWidth: 345, minWidth: 100, backgroundColor: "#2b3246" }}
        variant="outlined"
      >
        <CardActionArea onClick={() => navigate("/searchP/details/" + id)}>
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
                  <Typography gutterBottom variant="h6" component="div" noWrap>
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
            <Box sx={{ my: 0.1 }}>
              <Typography gutterBottom variant="body2">
                Categoria:
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label={category} color="primary" variant="outlined" />
              </Stack>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
   */
}
export default ProductItem;
