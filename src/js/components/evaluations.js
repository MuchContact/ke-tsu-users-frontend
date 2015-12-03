import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { EvaluationAction } from '../actions/actions';

const Evaluations = React.createClass({
  componentWillMount() {
    this.props.dispatch(EvaluationAction(`/${this.props.current_user.id}/evaluations`));
  },
  render() {
    var evalus = [];
    if(this.props.evaluations.length>0){
      evalus = this.props.evaluations.map((evaluation, index) => {
       return <tr>
               <td>{evaluation.projectName}</td>
               <td>{evaluation.solution?evaluation.solution.name:''}</td>
               <td>{evaluation.solution?evaluation.stack.name:''}</td>
               <td>{evaluation.status}</td>
             </tr>;
     });
    }
    return (
      <div className="row">
        <div className="page-header">
          <h3>Evaluations</h3>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Solution</th>
                <th>Stack</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {evalus}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
});

function mapStateToProps(state) {
  return {
    evaluations: state.evaluation.evaluation,
    current_user: state.current_user.current_user
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Evaluations);
