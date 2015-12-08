import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Link } from 'react-router';
import PersonalProfile from './personal_profile.js';
import Assignment from './assignment.js';
import Evaluations from './evaluations.js';
import Qualifications from './qualifications.js';
import Navbar from './navbar.js';


const Main = React.createClass({
  render() {
    return (
        <div className="container">
          <PersonalProfile />
          <Assignment />
          <Qualifications />
          <Evaluations />
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
})(Main);
