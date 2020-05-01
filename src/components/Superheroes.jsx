import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Favorite, FavoriteBorder } from "@material-ui/icons/";
import { likeSuperhero, unlikeSuperhero } from "../data/likedSuperheroes";

import {
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  IconButton
} from "@material-ui/core";





export default () => {

  const { loading, error, data } = useSelector(state => state.superheroes);
  const liked = useSelector(state => state.likedSuperheroes);
  const dispatch = useDispatch();

  const arrLiked = liked.map(likedSuperhero => likedSuperhero.name);
  const likeHandler = superhero => e => {
    dispatch(likeSuperhero(superhero));
  };
  const unlikeHandler = name => e => {
    dispatch(unlikeSuperhero(name));
  };

  return (
    <>
      {loading && <CircularProgress />}
      {error && (
        <Typography variant="body1" component="p">
          {error}
        </Typography>
      )}
      {data.length !== 0 && (
        <Grid container spacing={4} >
          {data.map(superhero => (
            <Grid  item key={superhero.id}  xs={12} sm={6} md={3} >
              <Card width="200">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    
                    image={superhero.image.url}
                    title="Contemplative Reptile"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {superhero.name}
                    </Typography>
                  </CardContent>
                  {!arrLiked.includes(`${superhero.name}`) && (
                    <IconButton
                      style={{ color: "blue" }}
                      onClick={likeHandler(superhero)}
                    >
                      <FavoriteBorder
                        fontSize="large"
                        className="globalColor"
                      />
                    </IconButton>
                  )}
                  {arrLiked.includes(`${superhero.name}`) && (
                    <IconButton
                      style={{ color: "blue" }}
                      onClick={unlikeHandler(superhero.name)}
                    >
                      <Favorite fontSize="large" className="globalColor" />
                    </IconButton>
                  )}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
