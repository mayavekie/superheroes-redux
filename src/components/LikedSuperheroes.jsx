import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unlikeSuperhero } from "../data/likedSuperheroes";

import { Favorite } from "@material-ui/icons";
import {
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActionArea
} from "@material-ui/core";

export default () => {
  const likedSuperheroes = useSelector(state => state.likedSuperheroes);
  const dispatch = useDispatch();
  const unlikeHandler = name => e => {
    dispatch(unlikeSuperhero(name));
  };
  return (
    <>
      <Typography variant="h1" class="title">Your favorite superheroes</Typography>
      {likedSuperheroes.length === 0 && (
        <Typography variant="body2" component="p" >
          Go search for your favorite superheroes
        </Typography>
      )}
      {likedSuperheroes.length !== 0 && (
        <Grid container  spacing={4} >
          {likedSuperheroes.map(superhero => (
            <Grid item  key={superhero.id} xs={12} sm={6} md={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={superhero.image.url}
                    title="superhero"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {superhero.name}
                    </Typography>
                  </CardContent>
                  <IconButton
                    style={{ color: "blue" }}
                    onClick={unlikeHandler(superhero.name)}
                  >
                    <Favorite fontSize="large" />
                  </IconButton>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          
        </Grid>
      )}
    </>
  );
};
