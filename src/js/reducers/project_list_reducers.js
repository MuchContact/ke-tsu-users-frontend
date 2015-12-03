var initialState = {
  projects: []
};

export default function projectList(state=initialState, action) {
  switch (action.type) {
    case "PROJECT_LIST_REQUEST":
      return Object.assign({
        projects: state.projects.slice(0)
      }, {
        request_status: "LOADING"
      });
    case "PROJECT_LIST_SUCCESS":
      return {
        request_status: "SUCCESS",
        projects: action.payload
      };
    case "PROJECT_LIST_FAILURE":
      return Object.assign({
        projects: state.projects.slice(0)
      }, {
        request_status: "FAILED"
      });
    default:
      return state;
  }
}