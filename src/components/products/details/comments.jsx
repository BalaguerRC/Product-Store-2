import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";

const Comments = ({ name, comment, date, value }) => {
  return (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 5 }}>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Publicado el {date}</Typography>
        </Grid>
        <Grid item>
          <Rating value={value} readOnly />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            {comment}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="outlined" size="small" >
            <Button sx={{ borderRadius: 3 }}>
              <ThumbUpIcon />
            </Button>
            <Button sx={{ borderRadius: 3 }}>
              <ThumbDownAltIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comments;
