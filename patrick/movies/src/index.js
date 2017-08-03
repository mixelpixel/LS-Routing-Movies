import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
