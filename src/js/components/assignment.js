import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { AssignmentAction } from '../actions/actions';
import CapabilityChooserDialogue from './capability_chooser_dialogue.js';

const Assignment = React.createClass({
  componentWillMount() {
    this.props.dispatch(AssignmentAction(`/${this.props.current_user.id}/projects`));
  },
  render() {
    var capabilityChooserDialogue='';
    if(this.props.assignment &&
        this.props.assignment.length &&
        this.props.assignment[0].uri){
      var project_id = this.props.assignment[0].uri.replace(/.+\/([0-9]+)$/g, "$1");
      capabilityChooserDialogue = <CapabilityChooserDialogue project_id={project_id}/>
    }
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">Assigned Projects</div>
          <ul className="list-inline row ul-row">
            <li className="col-md-4">
              <a className="assigned-project-name">
              {this.props.assignment && this.props.assignment.length > 0 ?
                this.props.assignment[0].name : 'Not assigned yet'}
              </a>
            </li>
            <li className="col-md-3">
            From 2015-12-1 To 2016-6-1
            </li>
            <li className="col-md-2">
            Inner System
            </li>
            <li className="col-md-2">
              <button type="button"
                      className="btn btn-primary btn-xs"
                      data-toggle="modal"
                      data-target="#capabilityChooser">
                      Apply Evaluation
              </button>
            </li>
          </ul>
        </div>
        {capabilityChooserDialogue}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    assignment: state.assignment.assignment,
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Assignment);
