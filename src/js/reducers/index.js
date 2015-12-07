import { combineReducers } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';

import current_user from './current_user_reducers';
import assignment from './assignment_reducers';
import evaluation from './evaluation_reducers';
import qualifications from './qualification_reducers';
import capabilities from './capability_reducers';
import login from './login_reducers'

var rootReducer = combineReducers({
  router: routerStateReducer,
  current_user: current_user,
  assignment: assignment,
  evaluation: evaluation,
  qualifications: qualifications,
  capabilities: capabilities,
  login: login

});

export default rootReducer;
