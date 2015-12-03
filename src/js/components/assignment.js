import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { AssignmentAction } from '../actions/actions';

const Assignment = React.createClass({
  componentWillMount() {
    this.props.dispatch(AssignmentAction(`/${this.props.current_user.id}/projects`));
  },
  render() {
    console.log("start");
    console.log(this.props);
    console.log("end");

    return (
      <div className="col-sm-12 col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">Current Assignment</div>
          <ul className="list-group">
            <li className="list-group-item">
              {this.props.assignment && this.props.assignment.length > 0 ?
                this.props.assignment[0].name : 'Not assigned yet'}
            </li>
          </ul>
          {this.props.assignment && this.props.assignment.length > 0 ?
            <div className="panel-body">
              <p>Project Description</p>
              <button type="button"
                      className="btn btn-info btn-lg"
                      data-toggle="modal"
                      data-target="#capabilityChooser">
                      Apply Evaluation
              </button>
            </div>
            :
            ''
          }
        </div>
        <button type="button"
                className="btn btn-info btn-lg"
                data-toggle="modal"
                data-target="#historyViewer">
                History
        </button>
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
