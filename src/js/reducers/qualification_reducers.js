var initialState = {
  qualifications: []
};

export default function qualifications(state=initialState, action) {
  switch (action.type) {
    case "QUALIFICATION_REQUEST":
      return Object.assign({
        qualifications: state.qualifications.slice(0),
        request_status: "LOADING"
      });
    case "QUALIFICATION_SUCCESS":
      return {
        request_status: "SUCCESS",
        qualifications: action.payload
      };
    case "QUALIFICATION_FAILURE":
      return Object.assign({
        qualifications: state.qualifications.slice(0),
        request_status: "FAILED"
      });
    case "LOGOUT_SUCCESS":
      return Object.assign({
        qualifications: []
      });
    default:
      return state;
  }
}
