import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { NewSolutionAction } from '../actions/actions';

const NewSolution = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    var newSolution = {
      "solution[name]": this.refs.name.value,
      "solution[description]": this.refs.description.value
    };
    this.props.dispatch(NewSolutionAction(newSolution));
  },

  componentWillReceiveProps(nextProps){
    if(nextProps.new_solution.location != undefined){
      var relativeURI = nextProps.new_solution.location.replace(/.+:\/\/[^\/]+(.+)$/, "$1");
      this.props.dispatch(this.props.pushState(null, relativeURI));
    }
  },

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>New Solution</h1>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="solution-name">Name</label>
            <input type="text" className="form-control" id="solution=name" ref="name" />
          </div>
          <div className="form-group">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10" className="form-control" ref="description"></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    'new_solution': state['new_solution']
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(NewSolution);
