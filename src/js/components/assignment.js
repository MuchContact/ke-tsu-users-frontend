import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const Assignment = React.createClass({
  render() {
    return (
      <div className="col-sm-12 col-md-8">
        <div className="panel panel-default">
          <div className="panel-heading">Current Assignment</div>
          <ul className="list-group">
            <li className="list-group-item">Project 1</li>
          </ul>
          <div className="panel-body">
            <p>Project Description</p>
            <button type="button"
                    className="btn btn-info btn-lg"
                    data-toggle="modal"
                    data-target="#capabilityChooser">
                    Apply Evaluation
            </button>

          </div>
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
    'current_user': state['current_user']
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Assignment);
