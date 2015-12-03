import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Link } from 'react-router';
import PersonalProfile from './personal_profile.js';
import Assignment from './assignment.js';
import Evaluations from './evaluations.js';
import Qualifications from './qualifications.js';
import CapabilityChooserDialogue from './capability_chooser_dialogue.js';
import AssignmentHistoryViewer from './assignment_history_viewer.js';
import Navbar from './navbar.js';


const Main = React.createClass({
  render() {
    return (
      <div className="container">
        <Navbar />

        <CapabilityChooserDialogue />

        <AssignmentHistoryViewer />

        <div className="row">
          <PersonalProfile />
          <Assignment />
        </div>
        <Evaluations />
        <Qualifications />

      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
    'current_user': state['current_user']
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Main);
