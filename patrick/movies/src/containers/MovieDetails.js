import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovieDetailsByID } from '../actions';

class MovieDetails extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.getMoviesByID(this.props.match.params.id);
  }

  render() {
    return (
      <div key={ this.props.movies.id }>
        <p> { `${this.props.movies.title}` }</p>
        <p> { `${this.props.movies.metascore}` }</p>
        <p> { `${this.props.movies.stars}` }</p>
        <p> { `${this.props.movies.director}` }</p>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movie
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMovieDetails: getMovieDetailsByID
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
