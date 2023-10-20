import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Perfil = () => {
  const getData = JSON.parse(localStorage.getItem("DATA"));

  return (
    <Grid container direction={"column"} justifyContent={"space-between"}>
      <Grid item p={3}>
        <Typography variant="button" sx={{ fontSize: 22 }}>
          Perfil
        </Typography>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="perfil"
          src="src/assets/download2.png"
          sx={{ width: 156, height: 156 }}
        />
      </Grid>
      <Grid item>
        <Divider>Data</Divider>
      </Grid>
      <Grid item p={3}>
        <Grid container direction={"column"} spacing={2} >
          <Grid item>
            <Typography variant="button">- Nombre:</Typography>
            <Typography variant="caption" color={"text.secondary"}>
              {getData.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="button">- Correo:</Typography>
            <Typography variant="caption" color={"text.secondary"}>
              {getData.email}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="button">- Fecha de nacimiento:</Typography>
            <Typography variant="caption" color={"text.secondary"}>
              {getData.date.substr(0, 10)}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled color="error" size="small">
              Delete Account
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

{
  /**
    <Grid sx={{ p: 2 }}>
        <Typography variant="button" sx={{ fontSize: 22 }}>
          Perfil
        </Typography>
        <Divider></Divider>
        <Grid container direction={"row"} justifyContent={"center"}>
          <Avatar
            alt="perfil"
            src="src/assets/download2.png"
            sx={{ width: 156, height: 156 }}
          />
        </Grid>
        <Divider>Datos</Divider>
        <Grid
          container
          direction={"row"}
          alignItems="flex-end"
          marginBottom={1}
          marginTop={1}
        >
          <Typography variant="button">- Nombre:</Typography>
          <Typography variant="caption" color={"text.secondary"}>
            {getData.name}
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          alignItems="flex-end"
          marginBottom={1}
          marginTop={1}
        >
          <Typography variant="button">- Correo:</Typography>
          <Typography variant="caption" color={"text.secondary"}>
            {getData.email}
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          alignItems="flex-end"
          marginBottom={1}
          marginTop={1}
        >
          <Typography variant="button">- Fecha de nacimiento:</Typography>
          <Typography variant="caption" color={"text.secondary"}>
            {getData.date.substr(0, 10)}
          </Typography>
        </Grid>
      </Grid>
     */
}

export default Perfil;
