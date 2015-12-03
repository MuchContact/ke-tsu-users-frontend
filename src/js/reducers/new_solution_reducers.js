export default function newSolution(state={}, action) {
  switch (action.type) {
    case "NEW_SOLUTION_REQUEST":
      return {
        request_status: "LOADING"
      };
    case "NEW_SOLUTION_SUCCESS":
      return {
        request_status: "SUCCESS",
        location: action.location
      };
    case "NEW_SOLUTION_FAILURE":
      return {
        request_status: "FAILED"
      };
    default:
      return state;
  }
}
