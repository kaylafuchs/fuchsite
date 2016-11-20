'use strict';

import styles from '../styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, indexRedirect } from 'react-router';
// import { Provider } from 'react-redux';
import Home from './components/home';
// import store from './store';
// import Routes from './routes';


ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Home} />
  </Router>,
  document.getElementById('app')
);

// Use this when you add redux
// ReactDOM.render(
//   <Provider store={store}>
//     <Routes />
//   </Provider>,
//   document.getElementById('app')
// );