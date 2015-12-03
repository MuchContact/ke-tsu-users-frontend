export default function current_user(state={}, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        request_status: "LOADING"
      };
    case "LOGIN_SUCCESS":
      return {
        request_status: "SUCCESS",
        current_user: action.current_user
      };
    case "LOGIN_FAILURE":
      return {
        request_status: "FAILED"
      };
    default:
      return state;
  }
}
