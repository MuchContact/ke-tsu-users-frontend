var initialState = {
  capabilities: [
    {
    }
  ]
};

export default function capability(state=initialState, action) {
  switch (action.type) {
    case "CAPABILITY_REQUEST":
      return Object.assign({
        capabilities: state.capabilities.slice(0)
      }, {
        request_status: "LOADING"
      });
    case "CAPABILITY_SUCCESS":
      return {
        request_status: "SUCCESS",
        capabilities: action.payload
      };
    case "CAPABILITY_FAILURE":
      return Object.assign({
        capabilities: state.capabilities.slice(0)
      }, {
        request_status: "FAILED"
      });
    case "LOGOUT_SUCCESS":
      return Object.assign({
        capabilities: []
      });
    default:
      return state;
  }
}
