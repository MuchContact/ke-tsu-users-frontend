export default function login(state={}, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        request_status: "LOADING"
      };
    case "LOGIN_SUCCESS":
      return {
        request_status: "SUCCESS",
        current_user: action.payload
      };
    case "LOGIN_FAILURE":
      alert(action.error);
      return {
        request_status: "FAILED"
      };
    default:
      return state;
  }
}
