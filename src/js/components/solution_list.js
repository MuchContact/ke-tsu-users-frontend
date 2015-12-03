import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Link } from 'react-router';
import { SolutionListAction } from '../actions/actions';

const SolutionList = React.createClass({
  componentWillMount() {
    console.log('what?');
    this.props.dispatch(SolutionListAction());
  },
  componentDidUpdate() {
    console.log('what?');
    //this.props.dispatch(SolutionListAction());
  },
  render() {
    return (
        <div>
        <div className="page-header">
          <h1>All Solutions</h1>
        </div>
        <table className="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          </thead>

          <tbody>
          {this.props.solutions.map((elem, index) =>
              <Solution {...elem} key={index} />
          )}
          </tbody>

        </table>
          <Link to="/solutions/new" href="javascript:void(0)" className="btn btn-primary">Create New</Link>
        </div>
    );
  }
});

SolutionList.propTypes = {
  solutions: PropTypes.array.isRequired
};

var Solution = React.createClass({
  render() {
    return (
      <tr>
        <td><Link to={`/solutions/${this.props.id}`}>{this.props.name}</Link></td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
});

var stateToProps = (state) => {
  return {
    q: state.router.location.query.q,
    solutions: state.solution_list.solutions
  }
};

var dispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    pushState: pushState
  }
}

export default connect(stateToProps, dispatchToProps)(SolutionList);
