import cities from "../data/locations.json";

const SET_COORDS = 'SET_COORDS';
const initialState = cities.map(d => ({
  city: d,
  coords: [0, 0]
}))

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COORDS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default citiesReducer;
