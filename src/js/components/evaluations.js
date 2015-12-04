import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { EvaluationAction } from '../actions/actions';

const Evaluations = React.createClass({
  componentWillMount() {
    this.props.dispatch(EvaluationAction(`/${this.props.current_user.id}/evaluations`));
  },
  generateRepositoryUri(evaluation){
    var repository = "https://";
    if(evaluation.stack)
      repository += evaluation.stack.name;
    if(evaluation.solution)
      repository += '-' + evaluation.solution.name;

    repository += evaluation.projectName;
    var random = Math.floor((Math.random() * 1000) + 1);
    repository += '-' + this.props.current_user.id + '-' + random;
    return repository.replace(/\s/g, '').replace('+', '');
  },
  render() {
    var evalus = [];
    if(this.props.evaluations && this.props.evaluations.length>0){
      evalus = this.props.evaluations.map((evaluation, index) => {
        var status = evaluation.status;
        if(!evaluation.status)
          status="NEW";
        var repository = this.generateRepositoryUri(evaluation);
       return <tr>
               <td>{evaluation.projectName}</td>
               <td>{evaluation.solution?evaluation.solution.name:''}</td>
               <td>{evaluation.stack?evaluation.stack.name:''}</td>
               <td>{repository}</td>
               <td>{status}</td>
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
                <th>Repository</th>
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
