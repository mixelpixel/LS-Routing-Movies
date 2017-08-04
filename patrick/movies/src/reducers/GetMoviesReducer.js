import { GET_MOVIES } from '../actions';

const moviesReducer = (movies = [], action) => {
  switch(action.type) {
    case GET_MOVIES:
      // if (action.error) return movies;
      return action.payload.data;
    default:
      return movies;
  }
};

export default moviesReducer;
