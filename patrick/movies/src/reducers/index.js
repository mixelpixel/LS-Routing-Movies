import { combineReducers } from 'redux';

import moviesReducer from './GetMoviesReducer';
import movieByIDReducer from './GetMovieByIDReducer';

// import { GET_MOVIES } from '../actions';
//
// const moviesReducer = (movies = [], action) => {
//   switch(action.type) {
//     case GET_MOVIES:
//       return action.payload.data;
//     default:
//       return movies;
//   }
// };

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieID: movieByIDReducer // ---> ????????????? WOT??????
});

export default rootReducer;
