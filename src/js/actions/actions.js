import request from 'superagent';
import addItemsToForm from '../utils/post_as_form';

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
          .withCredentials()
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
          .withCredentials()
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

export function LoginAction(entity) {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_REQUEST"
    });
    request.post(`${API_PREFIX}/authentication`)
        .withCredentials()
        .type("form")
        .send(entity)
        .end((err, res) => {
          if (res.statusType == 2 || res.statusType == 3 ) {
            dispatch(CurrentUser());
          } else {
            dispatch({
              type: "LOGIN_FAILED"
            });
          }
        });
  };
}

export function LogoutAction(callback) {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_REQUEST"
    });
    request.del(`${API_PREFIX}/authentication`)
        .withCredentials()
        .end((err, res) => {
          if (res.statusType == 2 || res.statusType == 3 ) {
            dispatch({
              type: "LOGOUT_SUCCESS"
            });
            callback && callback();
          } else {
            dispatch({
              type: "LOGOUT_FAILED"
            });
          }
        });
  };
}

export function NewEvaluationAction(entity, project_id, user_id) {
  return (dispatch) => {
    dispatch({
      type: "NEW_EVALUATION_REQUEST"
    });
    request.post(`${API_PREFIX}/projects/${project_id}/users/${user_id}/evaluations`)
        .withCredentials()
        .type("form")
        .send(entity)
        .end((err, res) => {
          if (res.statusType == 2 || res.statusType == 3 ) {
            dispatch(EvaluationAction(`/${user_id}/evaluations`));
          } else {
            dispatch({
              type: "NEW_EVALUATION_FAILED"
            });
          }
        });
  };
}
export var CurrentUser = remoteGetAction("CURRENT_USER", `${API_PREFIX}/users/current`);
export var AssignmentAction = remoteGetAction("ASSIGNMENT", `${API_PREFIX}/users`);
export var EvaluationAction = remoteGetAction("EVALUATION", `${API_PREFIX}/users`);
export var QualificationAction = remoteGetAction("QUALIFICATION", `${API_PREFIX}/users`);
export var CapabilityAction = remoteGetAction("CAPABILITY", `${API_PREFIX}/projects`);
