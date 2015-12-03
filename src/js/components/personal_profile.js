import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const PersonalProfile = React.createClass({
  render() {
    return (
      <div className="col-sm-6 col-md-4 jumbotron">
        <div className="thumbnail">
          <img src="" alt="User Picture" className="user-image"/>
          <div className="caption">
            <h3>{this.props.current_user.name}</h3>
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  console.log(state);
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
