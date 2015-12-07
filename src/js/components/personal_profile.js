import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const PersonalProfile = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="thumbnail">
          <div className="preferred_name">
            {this.props.current_user.name}
          </div>
          <span className="preferred_id">
            ID: 16116
          </span>
          <span className="status-flag">
            Professional Services
          </span>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(PersonalProfile);
