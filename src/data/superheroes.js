import axios from "axios";

//INITIAL STATE
const initialstate = {
  error: "",
  loading: false,
  data: []
};

//TYPES
const SUPERHERO_START = "SUPERHERO_START";
const SUPERHERO_SUCCES = "SUPERHERO_SUCCES";
const SUPERHERO_ERROR = "SUPERHERO_ERROR";

//ACTION CREATORS
export const getSuperheroes = str => dispatch => {
  dispatch(loadSuperheroes());
  axios
    .get("https://www.superheroapi.com/api.php/3869706483069527/search/" + str)
    .then(response => {
      return dispatch(setSuperheroes(response.data.results));
    })
    .catch(error => dispatch(setError(`No superheroes found for ${str}`)));
};

export const loadSuperheroes = () => ({ type: SUPERHERO_START });
export const setSuperheroes = superheroes => ({
  type: SUPERHERO_SUCCES,
  payload: superheroes
});
export const setError = message => ({
  type: SUPERHERO_ERROR,
  payload: message
});

//REDUCER
export default (state = initialstate, { type, payload }) => {
  switch (type) {
    case SUPERHERO_START:
      return { ...state, loading: true, error: "" };
    case SUPERHERO_SUCCES:
      return { ...state, loading: false, data: payload };
    case SUPERHERO_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
