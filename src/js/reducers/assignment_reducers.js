var initialState = {
  assignment: [
    {
      id: 1,
      name: 'Solution 1'
    }
  ]
};

export default function assignment(state=initialState, action) {
  switch (action.type) {
    case "ASSIGNMENT_REQUEST":
      return Object.assign({
        assignment: state.assignment.slice(0)
      }, {
        request_status: "LOADING"
      });
    case "ASSIGNMENT_SUCCESS":
      return {
        request_status: "SUCCESS",
        assignment: action.payload
      };
    case "ASSIGNMENT_FAILURE":
      return Object.assign({
        assignment: state.assignment.slice(0)
      }, {
        request_status: "FAILED"
      });
    case "LOGOUT_SUCCESS":
      return Object.assign({
        assignment: []
      });
    default:
      return state;
  }
}
