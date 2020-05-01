import React from "react";
import Superheroes from "./Superheroes";
import SuperheroForm from "./Form";
import LikedSuperheroes from "./LikedSuperheroes";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid
} from "@material-ui/core";

export default () => {
  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3"> Find your superhero </Typography>
          </Toolbar>
        </AppBar>
        <Box maxWidth="lg">
          <Grid container spacing="4" class="grid" maxWidth="lg">
            <Grid item >
              <SuperheroForm />
              <Superheroes />
            </Grid>
            <Grid item  >
              <LikedSuperheroes />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
