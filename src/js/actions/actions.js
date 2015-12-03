import request from 'superagent';
import addItemsToForm from '../utils/post_as_form';

const API_PREFIX = 'http://localhost:3000';

function remotePostAction(name, url, path='') {
  var requestAction = `${name.toUpperCase()}_REQUEST`;
  var successAction = `${name.toUpperCase()}_SUCCESS`;
  var failureAction = `${name.toUpperCase()}_FAILURE`;

  var requestStart = () => {
    return {
      type: requestAction
    }
  };

  var requestSuccess = (entity, res) => {
    return {
      type: successAction,
      payload: entity,
      location: res.headers['location']
    }
  };

  var requestFailed = () => {
    return {
      type: failureAction
    }
  };

  return (entity, path='') => {
    return (dispatch) => {
      dispatch(requestStart());
      console.log('call ' + url + path);
      request
          .post(url + path)
          .type('form')
          .send(entity)
          .end((err, res) => {
            if (res.statusType == 2 || res.statusType == 3 ) {
              console.log(res);
              dispatch(requestSuccess(entity, res));
            } else {
              dispatch(requestFailed());
            }
          });
    }
  };
}


function remoteGetAction(name, url, path='') {
  var requestAction = `${name.toUpperCase()}_REQUEST`;
  var successAction = `${name.toUpperCase()}_SUCCESS`;
  var failureAction = `${name.toUpperCase()}_FAILURE`;

  var requestStart = () => {
    return {
      type: requestAction
    }
  };

  var requestSuccess = (data) => {
    return {
      type: successAction,
      payload: data
    }
  };

  var requestFailed = () => {
    return {
      type: failureAction
    }
  };

  return (path='') => {
    return (dispatch) => {
      dispatch(requestStart());
      console.log('call ' + url + path)
      request
          .get(url + path)
          .end((err, res) => {
            if (res.statusType == 2 || res.statusType == 3) {
              dispatch(requestSuccess(res.body));
            } else {
              dispatch(requestFailed());
            }
          });
    }
  }
}

export function updateTab(tab) {
  return {
    type: "TAB_" + tab
  }
}

export var LoginAction = remotePostAction("LOGIN", `${API_PREFIX}/members/login`);

export var NewSolutionAction = remotePostAction("NEW_SOLUTION", `${API_PREFIX}/solutions`);
export var NewStackAction = remotePostAction("NEW_STACK", `${API_PREFIX}/solutions/`);

export var SolutionListAction = remoteGetAction("SOLUTION_LIST", `${API_PREFIX}/solutions`);
export var ProjectListAction = remoteGetAction("PROJECT_LIST", `${API_PREFIX}/projects`);
export var ProjectAction = remoteGetAction("PROJECT", `${API_PREFIX}/projects/`);
export var SolutionAction = remoteGetAction("SOLUTION", `${API_PREFIX}/solutions/`);
export var StackAction = remoteGetAction("STACK", `${API_PREFIX}/solutions/`);
export var NewExamProfileAction = remotePostAction("NEW_EXAM_PROFILE", `${API_PREFIX}/solutions/`);
