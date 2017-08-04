import { GET_MOVIE_BY_ID } from '../actions';

const movieByIDReducer = (movies = {}, action) => {
  switch(action.type) {
    case GET_MOVIE_BY_ID:
      // if (action.error) return movies; //<~~~ this/catch magic?
      return action.payload.data;
    default:
      return movies;
  }
};

export default movieByIDReducer;
