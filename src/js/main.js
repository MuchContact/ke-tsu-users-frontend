import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import {  combineReducers, applyMiddleware, compose, createStore  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import { createHistory } from 'history';
import configureStore from './stores/configureStore.dev';
require("bootstrap-webpack");
require("../css/index.css");

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

//<Route path="projects" component={ProjectList}>
//  <Route path="new" component={NewProject}/>
//  <Route path=":project_id" component={Project}/>
//</Route>
//<Route path="solutions" component={SolutionList}>
//    <Route path="new" component={NewSolution}/>
//    <Route path=":solution_id" component={Solution}>
//    <Route path="stacks/:stack_id" component={Stack}>
//    <Route path="exam_profiles/new" component={NewExamProfile}/>
//    </Route>
//    <Route path="stacks/new" component={NewStack}/>
//    </Route>
//    </Route>

// export default routes;

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
