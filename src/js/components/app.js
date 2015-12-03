import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router';

const App = React.createClass({
  render() {
    return (
        <div className="container">
          {this.props.children}
        </div>
    );
  }
});

export default App;
