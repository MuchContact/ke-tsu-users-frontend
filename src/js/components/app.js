import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router';
import { CurrentUser, LogoutAction } from '../actions/actions';

const App = React.createClass({
  componentWillMount() {
    this.props.dispatch(CurrentUser());
  },
  render() {
    return (
        <div className="container">
          {this.props.children}
        </div>
    );
  }
});
var stateToProps = (state) => {
  return {
    current_user: state.current_user.current_user
  }
};

var dispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    pushState: pushState
  }
};
export default connect(stateToProps, dispatchToProps)(App);
