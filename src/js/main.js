import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import {  combineReducers, applyMiddleware, compose, createStore  } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app';
import { createHistory } from 'history';

import SolutionList from './components/solution_list';
import Solution from './components/Solution';
import Stack from './components/Stack';
import NewSolution from './components/new_solution';
import NewStack from './components/NewStack';
import NewExamProfile from './components/new_exam_profile';
import ProjectList from './components/ProjectList';
import Project from './components/project';
import NewProject from './components/new_project';
import configureStore from './stores/configureStore.dev';
import routes from './routers'

require("bootstrap-webpack");

var store = configureStore();
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    </Provider>,
    document.getElementById("main")
);

