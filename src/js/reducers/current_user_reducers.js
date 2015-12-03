export default function current_user(state={current_user: {}}, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "CURRENT_USER_REQUEST":
      return Object.assign(newState, {
        request_status: "LOADING"
      });
    case "CURRENT_USER_SUCCESS":
      return Object.assign(newState, {
        request_status: "SUCCESS",
        current_user: action.payload
      });
    case "CURRENT_USER_FAILURE":
      return Object.assign(newState, {
        request_status: "FAILED"
      });
    case "LOGOUT_SUCCESS":
      return {
        current_user: {}
      };
    default:
      return state;
  }
}
