import { InfoOutlined } from "@mui/icons-material";
import { Box, Divider, Grid, Rating, Tooltip, Typography } from "@mui/material";
import React from "react";

const DetailDescription = ({
  id,
  name,
  description,
  category,
  quantity,
  author,
  date,
  precio,
}) => {
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
            <Tooltip title={name}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontWeight: 550, width: 300 }}
                noWrap
              >
                {name}
              </Typography>
            </Tooltip>
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
        <Divider sx={{ pb: 2 }} />
        <Box pt={2} pb={2}>
          <Typography gutterBottom variant="subtitle1" fontSize={20} sx={{fontWeight:550}}>
            Details:
          </Typography>
          <Box display={"flex"}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              -Brand Code:
            </Typography>
            <Typography
              variant="subtitle2"
              color={"text.secondary"}
              marginLeft={0.5}
            >
              {id}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              -Descripcion:
            </Typography>
            <Typography
              variant="subtitle2"
              color={"text.secondary"}
              marginLeft={0.5}
            >
              {description}
            </Typography>
          </Box>

          {quantity == 0 ? null : (
            <Box display={"flex"}>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                -Cantidad:
              </Typography>
              <Typography
                variant="subtitle2"
                color={"text.secondary"}
                marginLeft={0.5}
              >
                {quantity}
              </Typography>
            </Box>
          )}
          <Box display={"flex"}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              -Categoria:
            </Typography>
            <Typography
              variant="subtitle2"
              color={"text.secondary"}
              marginLeft={0.5}
            >
              {category}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              -Autor:
            </Typography>
            <Typography
              variant="subtitle2"
              color={"text.secondary"}
              marginLeft={0.5}
            >
              {author}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              -Fecha Exportacion:
            </Typography>
            <Typography
              variant="subtitle2"
              color={"text.secondary"}
              marginLeft={0.5}
            >
              {date}
            </Typography>
          </Box>

          {quantity == 0 ? (
            <Box display={"flex"}>
              <Typography variant="subtitle1" gutterBottom>
                <Grid container direction={"row"} alignItems="center">
                  <InfoOutlined sx={{ color: "yellow" }} />
                  <Typography variant="" color="yellow">
                    Producto no disponible
                  </Typography>
                </Grid>
              </Typography>
            </Box>
          ) : null}
        </Box>

        <Divider />
      </Grid>
    </Grid>
  );
};

export default DetailDescription;
