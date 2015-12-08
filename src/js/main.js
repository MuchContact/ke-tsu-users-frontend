import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import {  combineReducers, applyMiddleware, compose, createStore  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import { createHistory } from 'history';
import configureStore from './stores/configureStore.dev';
require("../styles/fonts.css");
require("bootstrap-webpack!../styles/bootstrap.config.js");
require("../styles/theme.scss");
require("../styles/index.css");

import Login from './components/login';
import Main from './components/main';

var store = configureStore();

var routes = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Main} onEnter={requireAuth}/>
        <Route path="login" component={Login}/>
      </Route>
    </Router>
);

function requireAuth(nextState, replaceState) {
  const state = store.getState();
  if (!state.current_user.current_user.name) {
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
  }
}

ReactDOM.render(
    <Provider store={store}>
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    </Provider>,
    document.getElementById("main")
);
