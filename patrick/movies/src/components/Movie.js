import React from 'react';

import { Link } from 'react-router-dom';

const Movie = ({ movie, i }) => {
  return (
    <li key={ i }>
      <Link to={ `/${movie.id}` }>{ `Title: ${movie.title}` }</Link>
      {/* <Link to={ `/${movie.title}` }>{ `Title: ${movie.title}` }</Link> */}
      {/* <p>{ `Title: ${movie.title}` }</p> {/* Link tag goes here to invoke click */}
    </li>
  );
};

export default Movie;
