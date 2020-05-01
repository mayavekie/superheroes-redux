//INITIAL STATE
const initialState = [];

//TYPES
const LIKE_SUPERHERO = "LIKE_SUPERHERO";
const UNLIKE_SUPERHERO = "UNLIKE_SUPERHERO";

//ACTION CREATORS
export const likeSuperhero = payload => ({
  type: LIKE_SUPERHERO,
  payload
});
export const unlikeSuperhero = name => ({
  type: UNLIKE_SUPERHERO,
  payload: name
});

//REDUCER
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIKE_SUPERHERO:
      return [...state, payload];
    case UNLIKE_SUPERHERO:
      return state.filter(data => data.name !== payload);
    default:
      return state;
  }
};
