import React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { SolutionAction, updateTab } from '../actions/actions';
import { pushState } from 'redux-router';

const Solution = React.createClass({
  componentWillMount() {
    if (this.props.param_id) {
      this.props.dispatch(SolutionAction(this.props.param_id));
    }
  },

  renderTab(tabState, tabName) {
    var className = (tabState == this.props.tabState ? 'active' : '');
    return (<li role="presentation" className={className}>
              <a href="#" onClick={
                  (e) => {
                    console.log(this.props.tabState);
                    this.props.dispatch(updateTab(tabState))
                  }
                }>{tabName}</a></li>);
  },
  renderDescrption() {
    return (
        <div>
          {this.props.solution.description}
        </div>
    );
  },
  renderStacks() {
    console.log(this.props.solution.stacks);
    return (
        <div>
          <StackList stacks={this.props.solution.stacks}/>
          <Link to={`/solutions/${this.props.solution.id}/stacks/new`} className="btn btn-primary">Add New Stack</Link>
        </div>
    );
  },
  render() {
    var description = this.props.tabState == "DESCRIPTION" ? this.renderDescrption() : "";
    var stacks = this.props.tabState == "STACKS" ? this.renderStacks() : "";
    return (
        <div>
          <h2>{this.props.solution.name}</h2>
          <ul className="nav nav-tabs">
            {this.renderTab("DESCRIPTION", "Description")}
            {this.renderTab("STACKS", "Stacks")}
          </ul>
          {description}
          {stacks}
        </div>
    );
  }
});

Solution.propTypes = {
  tabState: PropTypes.oneOf([
    "DESCRIPTION",
    "STACKS"
  ]),
  solution: PropTypes.object.isRequired
};

var StackList = React.createClass({
  render() {
    return (
        <table className="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Backing Services</th>
          </tr>
          </thead>
          <tbody>
          {this.props.stacks.map((stack, index) =>
              <tr key={index}>
                <td><Link to={stack.uri}>{stack.name}</Link></td>
                <td>{stack.backing_services.join(", ")}</td>
              </tr>
          )}
          </tbody>
        </table>
    );
  }
});


var stateToProps = (state) => {
  return {
    solution: state.solution.solution,
    tabState: state.solution.tabState,
    param_id: state.router.params.id
  }
};

var dispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    pushState: pushState
  }
};

export default connect(stateToProps, dispatchToProps)(Solution);
