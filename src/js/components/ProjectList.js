import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ProjectListAction } from '../actions/actions';
import { pushState } from 'redux-router';

const ProjectList = React.createClass({
  componentWillMount() {
    console.log('what?');
    this.props.dispatch(ProjectListAction());
  },
  componentDidUpdate() {
    console.log('what?');
    //this.props.dispatch(SolutionListAction());
  },
  render() {
    return (
        <div>
          <div className="page-header">
            <h1>All Projects</h1>
          </div>
          <table className="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            </thead>

            <tbody>
            {this.props.projects.map((elem, index) =>
                <Project {...elem} key={index} />
            )}
            </tbody>

          </table>
          <Link to="/projects/new" className="btn btn-primary">Create New</Link>
        </div>
    );
  }
});

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

var Project = React.createClass({
  render() {
    return (
        <tr>
          <td><Link to={`/projects/${this.props.id}`}>{this.props.name}</Link></td>
          <td>{this.props.description}</td>
        </tr>
    );
  }
});

var stateToProps = (state) => {
  console.log(state.project_list.projects)
  return {
    q: state.router.location.query.q,
    projects: state.project_list.projects
  }
};

var dispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    pushState: pushState
  }
};

export default connect(stateToProps, dispatchToProps)(ProjectList);
