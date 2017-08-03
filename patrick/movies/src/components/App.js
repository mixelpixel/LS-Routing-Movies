import React, { Component } from 'react';
import logo from '../art/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Lambda School: React-Routing</h2>
        </div>
        <p className="App-intro">
          Something <code>AMAZING</code> will go here!
        </p>
      </div>
    );
  }
}

export default App;
