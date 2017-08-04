import React from 'react';


const Movie = ({ movie, i }) => {
  return (
    <li key={ i }>
      <p>{ `Title: ${movie.title}` }</p>
    </li>
  );
};

export default Movie;
