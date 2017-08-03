// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// REACT-ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
// <body>...</body>
import './css/index.css';
// App
import App from './components/App';
// REDUCERS
import rootReducer from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const STORAGE_WAREHOUSE = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = { STORAGE_WAREHOUSE }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
