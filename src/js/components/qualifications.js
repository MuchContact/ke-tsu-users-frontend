import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const Qualifications = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="page-header">
          <h3>Qualifications</h3>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Solution</th>
                <th>Stack</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
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
})(Qualifications);
