import React, { Component } from 'react';


const Friend = ({ movie, index }) => {
  return (
    <li key={ index }>
      <p>{ `Title: ${movie.title}` }</p>
    </li>
  );
};

export default Friend;
