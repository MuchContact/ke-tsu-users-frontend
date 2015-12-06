import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { QualificationAction } from '../actions/actions';

const Qualifications = React.createClass({
  componentWillMount() {
    this.props.dispatch(QualificationAction(`/${this.props.current_user.id}/qualifications`));
  },
  render() {
    var qualificationDoms = [];
    if(this.props.qualifications.length>0){
      qualificationDoms = this.props.qualifications.map((qualification, index) => {
       return <tr>
               <td>{qualification.project_name}</td>
               <td>{qualification.solution_name}</td>
               <td>{qualification.stack_name}</td>
             </tr>;
     });
    }
    return (
      <div className="row">
        <div className="page-header">
          <h3>Qualifications</h3>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Solution</th>
                <th>Stack</th>
              </tr>
            </thead>
            <tbody>
              {qualificationDoms}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
});

function mapStateToProps(state) {
  return {
    qualifications: state.qualifications.qualifications,
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Qualifications);
