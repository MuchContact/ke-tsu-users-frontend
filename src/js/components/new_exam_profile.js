import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { NewExamProfileAction } from '../actions/actions';

const NewExamProfile = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    console.log({
      name: this.refs.name.value.trim(),
      raml: this.refs.raml.value.trim(),
      archetype: this.refs.archetype.value.trim()
    });
    var newExamProfile = {
      name: this.refs.name.value.trim(),
      raml: this.refs.raml.value.trim(),
      archetype: this.refs.archetype.value.trim()
    };
    this.props.dispatch(NewExamProfileAction({
      'exam_profile[name]': this.refs.name.value.trim(),
      'exam_profile[raml]': this.refs.raml.value.trim(),
      'exam_profile[archetype]': this.refs.archetype.value.trim()
    }, `${this.props.solution_id}/stacks/${this.props.stack_id}/exam_profiles`))
  },
  componentWillReceiveProps(nextProps){
    if(nextProps.new_exam_profile.location){
      this.props.dispatch(this.props.pushState(null, `/solutions/${nextProps.solution_id}/stacks/${nextProps.stack_id}`));
    }
  },
  render() {
    return (
        <div>
          <div className="page-header">
            <h1>New ExamProfile</h1>
          </div>
          <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Raml</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="raml" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Archetype</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="archetype" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    new_exam_profile: state['new_exam_profile'],
    solution_id: state.router.params.solution_id,
    stack_id: state.router.params.stack_id
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(NewExamProfile);
