import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { ProjectAction } from '../actions/actions';


const Project = React.createClass({
  componentWillMount() {
    if (this.props.param_id) {
      this.props.dispatch(ProjectAction(this.props.param_id));
    }
  },

  render() {
    return (
        <div>
          <h2>{this.props.name}</h2>
          <h3>Description</h3>
          <p>
            {this.props.description}
          </p>
          <ProjectSolutionList solutions={this.props.solutions} new_solution={this.props.new_solution}/>
        </div>
    );
  }
});

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  solutions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    stack: PropTypes.shape({
      name: React.PropTypes.string.isRequired
    })
  }))
};

var ProjectSolution = React.createClass({
  renderEditMode() {
    return (
        <tr>
          <td>{this.props.name}</td>
          <td>
            <select type="text" className="form-control" ref="stack">
              <option value="">Select Stack</option>
            </select>
          </td>
          <td>
            <button className="btn btn-primary">Save</button>
            { ' ' }
            <button className="btn btn-primary">Cancel</button>
          </td>
        </tr>
    );
  },
  renderReadMode() {
    return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.stack.name}</td>
          <td>
            <button className="btn btn-primary">Edit</button>
            { ' ' }
            <button className="btn btn-primary">Remove</button>
            { ' ' }
            <button className="btn btn-primary">Apply for Exam</button>
          </td>
        </tr>
    );
  },
  render() {
    return (
        this.props.mode == "EDIT" ? this.renderEditMode() : this.renderReadMode()
    );
  }
});

var ProjectSolutionList = React.createClass({
  render() {
    var newSolution = this.props.new_solution ? (<NewProjectSolution />) : '';
    return (
        <div>
          <h3>Solutions</h3>
          <table className="table">
            <thead>
            <tr>
              <th>Solution</th>
              <th>Stack</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.props.solutions.map((elem, index) => {
              return (<ProjectSolution {...elem} key={index}/>);
            })}
            {newSolution}
            </tbody>
          </table>
          <button className="btn btn-primary" disabled={this.props.new_solution}>Add Solution</button>
        </div>
    );
  }
});

var NewProjectSolution = React.createClass({
  render() {
    return (
        <tr>
          <td>
            <div className="form-group">
              <select type="text" className="form-control" ref="solution">
                <option value="">Select Solution</option>
              </select>
            </div>
          </td>
          <td>
            <div className="form-group">
              <select type="text" className="form-control" ref="stack">
                <option value="">Select Stack</option>
              </select>
            </div>
          </td>
          <td>
            <button type="submit" className="btn btn-default">Save</button>
            { ' ' }
            <button className="btn btn-default">Cancel</button>
          </td>
        </tr>
    );
  }
});

var stateToProps = (state) => {
  return {
    solutions: state.project.solutions,
    param_id: state.router.params.id
  }
};

var dispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    pushState: pushState
  }
};
export default connect(stateToProps, dispatchToProps)(Project);
