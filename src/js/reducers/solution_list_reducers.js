var initialState = {
  solutions: []
};

export default function solutionList(state=initialState, action) {
  switch (action.type) {
    case "SOLUTION_LIST_REQUEST":
      return Object.assign({
        solutions: state.solutions.slice(0)
      }, {
        is_loading: true
      });
    case "SOLUTION_LIST_SUCCESS":
      return {
        is_success: true,
        solutions: action.payload
      };
    case "SOLUTION_LIST_FAILURE":
      Object.assign({
        solutions: state.solutions.slice(0)
      }, {
        is_failed: true
      });
    default:
      return state;
  }
}