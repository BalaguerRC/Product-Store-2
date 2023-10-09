import { Box, Divider, Grid, Rating, Typography } from "@mui/material";
import React from "react";

const DetailDescription = ({id,name,description,category,quantity,author,date,precio}) => {
  return (
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: 550 }}>
              {name}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="button" mr={1}>
                4.4
              </Typography>
              <Rating value={4} size="small" readOnly />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h6">$USD {precio}</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Typography gutterBottom variant="subtitle1" component="div">
          Details
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          Brand Code:
          <Typography
            variant="subtitle2"
            color={"text.secondary"}
            marginLeft={0.5}
          >
            {id}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          Descripcion:
          <Typography
            variant="subtitle2"
            color={"text.secondary"}
            marginLeft={0.5}
          >
            {description}
          </Typography>
        </Typography>
        {quantity == 0 ? null : (
          <Grid>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              Cantidad:
              <Typography
                variant="subtitle2"
                color={"text.secondary"}
                marginLeft={0.5}
              >
                {quantity}
              </Typography>
            </Typography>
          </Grid>
        )}
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          Categoria:
          <Typography
            variant="subtitle2"
            color={"text.secondary"}
            marginLeft={0.5}
          >
            {category}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          Autor:
          <Typography
            variant="subtitle2"
            color={"text.secondary"}
            marginLeft={0.5}
          >
            {author}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          Fecha Exportacion:
          <Typography
            variant="subtitle2"
            color={"text.secondary"}
            marginLeft={0.5}
          >
            {date}
          </Typography>
        </Typography>
        {quantity == 0 ? (
          <Typography variant="subtitle1" gutterBottom>
            <Grid container direction={"row"} alignItems="center">
              <InfoOutlined sx={{ color: "yellow" }} />
              <Typography variant="" color="yellow">
                Producto no disponible
              </Typography>
            </Grid>
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default DetailDescription;
