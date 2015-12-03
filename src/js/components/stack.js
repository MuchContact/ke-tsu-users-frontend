import React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { StackAction } from '../actions/actions';
import { pushState } from 'redux-router';

const Stack = React.createClass({
  componentWillMount() {
    if (this.props.stack_id && this.props.solution_id) {
      this.props.dispatch(StackAction(`${this.props.solution_id}/stacks/${this.props.stack_id}`));
    }
  },
  render() {
    console.log(this.props.stack);
    return (
        <div>
          <h2>{this.props.stack.name}</h2>
          <h3>Backing Services</h3>
          <ul className="list-inline">
            {this.props.stack.backing_services.map((elem, index) => {
              return (<li key={index}>{elem}</li>);
            })}
          </ul>
          <h3>Exam Profiles</h3>
          <ExamProfileList exam_profiles={this.props.stack.exams} uri_prefix={`/solutions/${this.props.solution_id}/stacks/${this.props.stack_id}/exam_profiles/`}/>
        </div>
    );
  }
});

Stack.propTypes = {
  stack: PropTypes.shape({
    backing_services: React.PropTypes.array.isRequired,
    exams: React.PropTypes.arrayOf(PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      raml: React.PropTypes.string.isRequired,
      archetype: React.PropTypes.string.isRequired
    }))
  })
};

var ExamProfileList = React.createClass({
  goToCreateExamProfile() {

  },
  render() {
    console.log(this.props.exam_profiles);

    return (
        <div>
          <table className="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Raml</th>
              <th>Archetype</th>
            </tr>
            </thead>
            <tbody>
            {this.props.exam_profiles.map((elem, index) => {
              return (<tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.raml}</td>
                <td>{elem.archetype}</td>
              </tr>)
            })}
            </tbody>
          </table>
          <Link to={this.props.uri_prefix + 'new'}>New Exam Profile</Link>
        </div>
    );
  }
});


var stateToProps = (state) => {
  return {
    stack: state.stack.stack,
    solution_id: state.router.params.solution_id,
    stack_id: state.router.params.stack_id
  }
};

var dispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    pushState: pushState
  }
};

export default connect(stateToProps, dispatchToProps)(Stack);
