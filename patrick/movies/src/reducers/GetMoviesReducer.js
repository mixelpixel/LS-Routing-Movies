import { GET_MOVIES } from '../actions';

// movies is the parent array for the App State Object
// I don't like to call it "state" just because
// the term "state" gets used differently in different
// contexts and I am trying to figure out the
// underlying structure regardless of
// the identifiers/variable names vs the
// nomenclature for the architecture
const moviesReducer = (movies = [], action) => {
  switch(action.type) {
    case GET_MOVIES:
      if (action.error) return movies;
      return action.payload.data;
    default:
      return movies;
  }
};

export default moviesReducer;
