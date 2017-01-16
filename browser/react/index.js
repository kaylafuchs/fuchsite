'use strict';

import styles from '../styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { Provider } from 'react-redux';
import Container from './components/Container';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Thesis from './components/Thesis';
import Contact from './components/Contact';
// import store from './store';
// import Routes from './routes';


ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={Container}>
  		<IndexRoute component={Home} />
  		<Route path="/about" component={About} />
	  	<Route path="/resume" component={Resume} />
	  	<Route path="/thesis" component={Thesis} />
	  	<Route path="/contact" component={Contact} />
	</Route>
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