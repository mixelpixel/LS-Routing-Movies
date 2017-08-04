import React from 'react';


const Movie = ({ movie, i }) => {
  return (
    <li key={ i }>
      <p>{ `Title: ${movie.title}` }</p> {/* Link tag goes here to invoke click */}
    </li>
  );
};

export default Movie;
