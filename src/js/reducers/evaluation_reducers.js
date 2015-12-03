var initialState = {
  evaluation: [
    {
    }
  ]
};

export default function evaluation(state=initialState, action) {
  switch (action.type) {
    case "EVALUATION_REQUEST":
      return Object.assign({
        evaluation: state.evaluation.slice(0)
      }, {
        request_status: "LOADING"
      });
    case "EVALUATION_SUCCESS":
      return {
        request_status: "SUCCESS",
        evaluation: action.payload
      };
    case "EVALUATION_FAILURE":
      return Object.assign({
        evaluation: state.evaluation.slice(0)
      }, {
        request_status: "FAILED"
      });
    case "LOGOUT_SUCCESS":
      return Object.assign({
        evaluation: []
      });
    default:
      return state;
  }
}
