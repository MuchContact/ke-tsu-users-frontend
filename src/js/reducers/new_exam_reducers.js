export default function new_exam_profile(state = {}, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case "NEW_EXAM_PROFILE_REQUEST":
      return Object.assign(newState, {
        request_status: "LOADING"
      });
    case "NEW_EXAM_PROFILE_SUCCESS":
      return Object.assign(newState, {
        request_status: "SUCCESS",
        location: action.location
      });
    case "NEW_EXAM_PROFILE_FAILURE":
      return Object.assign(newState, {
        request_status: "FAILED"
      });
    default:
      return state;
  }
}
