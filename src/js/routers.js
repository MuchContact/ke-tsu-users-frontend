import React from 'react';
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
import Login from './components/login';


var routes = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={SolutionList}/>
        <Route path="solutions" component={SolutionList}/>
        <Route path="login" component={Login}/>
        <Route path="solutions/new" component={NewSolution}/>
        <Route path="solutions/:id" component={Solution}/>
        <Route path="solutions/:id/stacks/new" component={NewStack}/>
        <Route path="solutions/:solution_id/stacks/:stack_id" component={Stack}/>
        <Route path="solutions/:solution_id/stacks/:stack_id/exam_profiles/new" component={NewExamProfile}/>
        <Route path="projects" component={ProjectList}/>
        <Route path="projects/new" component={NewProject}/>
        <Route path="projects/:id" component={Project}/>
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

export default routes;
