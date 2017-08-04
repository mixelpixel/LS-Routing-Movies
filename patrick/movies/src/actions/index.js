import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';

export const getMovies = () => {
  const promise = axios.get('http://localhost:5000/movies');
  return {
    type: GET_MOVIES,
    payload: promise
  };
};

// server.js
// const movies = [
// 	{
// 		id: 0,
// 		title: 'The Godfather',
// 		director: 'Francis Ford Coppola',
// 		metascore: 100,
// 		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
// 	},
//           vvvvvv/VVV
// app.get('/movies/:id', (req, res) => {
// 	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
// 	res.send(movie);
// });

export const getMovieDetailsByID = (id) => {
  const promise = axios.get(`http://localhost:5000/movies/:${id}`);
  return {
    type: GET_MOVIE_BY_ID,
    payload: promise
  };
};
