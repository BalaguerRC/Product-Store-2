import Pc from "../../../assets/Pc.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ListProductsCategoryR from "./listProductsCategoryR";

const HomeR = () => {
  const HeiWidh = 500;
  return (
    <div>
      <Grid
        container
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        paddingTop={5}
      >
        <Grid item>
          <div
            style={{ width: "100%", height: "auto" }}
            className="imgHomeResponsive"
          >
            <Grid
              container
              direction={"column"}
              textAlign={"center"}
              spacing={3}
              sx={{ p: 7, backdropFilter: "blur(4px)" }}
            >
              <Grid item>
                <Typography variant="h3" sx={{ fontWeight: 900 }} gutterBottom>
                  Welcome to ProductS
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color={"text.secondary"} gutterBottom>
                  On this page you will find everything you need at your
                  fingertips. From household items, as well as tools,
                  consumables, video games and much more.{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 3 }}
                  href="/search/all"
                >
                  Buy Something
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item>
          <ListProductsCategoryR />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeR;

/**
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
              <Button
                variant="contained"
                sx={{ borderRadius: 3 }}
                href="/search/all"
              >
                Buy Something
              </Button>
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
 */
