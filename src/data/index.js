import { createStore, applyMiddleware, combineReducers } from "redux";
import likedSuperheroesReducer from "./likedSuperheroes";
import superheroesReducer from "./superheroes";

import logger from "redux-logger";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({
    superheroes: superheroesReducer,
    likedSuperheroes: likedSuperheroesReducer
  }),
  applyMiddleware(thunk, logger)
);
