import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { pushState } from 'redux-router';

const App = React.createClass({
  render() {
    return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/solutions" href="javascript: void(0)">Solutions</Link></li>
                  <li><Link to="/projects" href="javascript: void(0)">Projects</Link></li>
                  <li><Link to="/exam_requests" href="javascript: void(0)">Exam Requests</Link></li>
                  <li><a href="#">Xu Shanchuan</a></li>
                  <li><a href="#">Logout</a></li>
                  <li><Link to="/login" href="javascript: void(0)">Login</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            {this.props.children}
          </div>
        </div>
    );
  }
});

export default App;
