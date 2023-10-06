import {
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import ListProductCategory from "./listProductCategory";
import homeimg from "../../assets/homeimg2.png";
import { useNavigate } from "react-router-dom";
import Pc from "../../assets/Pc.png";
import Pc1 from "../../assets/Pc1.jpg";
import Pc2 from "../../assets/Pc2.png";
import Pc3 from "../../assets/Pc3.jpg";

const ButtonCustom = styled(Button)({
  fontWeight: 550,
  padding: "6px 12px",
  backgroundColor: "#661AE6",
  color: "white",
  "&:hover": {
    backgroundColor: "#8146eb",
    borderColor: "#8146eb",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#8146eb",
    borderColor: "#8146eb",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #661AE6",
  },
});
const HomeView = () => {
  const HeiWidh = 500;
  const navigate = useNavigate();
  //242933
  return (
    <div>
      <div style={{ width: "100%", height: "auto" }}>
        <Box>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={3}
            sx={{ p: 8 }}
          >
            <Grid item xs={5.5}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h3" sx={{ fontWeight: 900 }} gutterBottom>
                  Welcome to ProductS
                </Typography>
                <Typography variant="h6" color={"text.secondary"} gutterBottom>
                  On this page you will find everything you need at your
                  fingertips. From household items, as well as tools,
                  consumables, video games and much more.{" "}
                </Typography>
              </Box>
              <Button variant="contained" sx={{ borderRadius: 3 }} href="/products">Buy Something</Button>
            </Grid>
            <Grid item xs={4.5}>
              <img
                src={Pc}
                alt="test"
                style={{
                  borderRadius: 10,
                  width: HeiWidh,
                  height: HeiWidh,
                  boxShadow: "13px 15px 0px 0px #000",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
      <Divider sx={{ background: "#1d212c", height: 10 }}/>
      <ListProductCategory />
    </div>
  );
};

{
  /**
  <div style={{ width: "100%", height: "auto" }}>
        <Box
          sx={{
            alignItems: "center",
            display: "grid",
            backgroundPosition: "top",
            backgroundImage: `url(${homeimg})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            justifyContent: "center",
          }}
        >
          <Grid container marginTop={90} marginBottom={10} textAlign={"center"}>
            <Container fixed>
              <ButtonCustom
                variant="contained"
                onClick={() => navigate("products")}
              >
                Products
              </ButtonCustom>
            </Container>
          </Grid>
        </Box>
      </div>
      <Divider sx={{ background: "#1d212c", height: 10 }}></Divider>
      <ListProductCategory />
 */
}

export default HomeView;
