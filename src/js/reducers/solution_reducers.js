export default function solution(state = {tabState: 'STACKS', solution: {stacks: []}}, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case "SOLUTION_REQUEST":
      return Object.assign(newState, {
        request_status: "LOADING"
      });
    case "SOLUTION_SUCCESS":
      return Object.assign(newState, {
        solution: action.payload,
        request_status: "SUCCESS"
      });
    case "SOLUTION_FAILURE":
      return Object.assign(newState, {
        request_status: "FAILED"
      });
    case "TAB_DESCRIPTION":
      console.log(state);
      return Object.assign(newState, {
        tabState: "DESCRIPTION"
      });
    case "TAB_STACKS":
      return Object.assign(newState, {
        tabState: "STACKS"
      });
    default:
      return state;
  }
}