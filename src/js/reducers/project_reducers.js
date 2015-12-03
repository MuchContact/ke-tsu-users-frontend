export default function project(state = {solutions: []}, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case "PROJECT_REQUEST":
      return Object.assign(newState, {
        request_status: "LOADING"
      });
    case "PROJECT_FAILURE":
      return Object.assign(newState, {
        request_status: "FAILED"
      });
    case "PROJECT_SUCCESS":
      return Object.assign(newState, {
        solutions: action.payload.solutions,
        request_status: "SUCCESS"
      });
    default:
      return state;
  }
}
