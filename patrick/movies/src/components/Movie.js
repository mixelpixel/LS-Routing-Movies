import React, { Component } from 'react';


const Friend = ({ movie, i }) => {
  return (
    <li key={ i }>
      <p>{ `Title: ${movie.title}` }</p>
    </li>
  );
};

export default Friend;
