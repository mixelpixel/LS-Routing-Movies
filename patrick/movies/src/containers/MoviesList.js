import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions'; // <~~ '../actions/index.js'
import { bindActionCreators } from 'redux';


class MoviesList extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <ol>
        { this.props.movies.map((movie, i) => {
          return ( // THIS NEEDS TO BE PULLED OUT AND MADE ANOTHER MODULE
            <li key={ i }>
              <p>{ `Title: ${movie.title}`}</p>
            </li>
          );
        }) }
      </ol>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllMovies: getMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
