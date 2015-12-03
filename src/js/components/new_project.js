import React, { PropTypes } from 'react';

const NewProject = React.createClass({
  getInitialState() {
    return {
      name: '',
      description: ''
    };
  },

  onSubmit(e) {
    e.preventDefault();
    console.log({
      name: this.refs.name.value,
      description: this.refs.description.value
    });
  },

  render() {
    return (
        <div>
          <div className="page-header">
            <h1>New Project</h1>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="Project-name">Name</label>
              <input type="text" className="form-control" id="Project=name" ref="name" />
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

export default NewProject;
