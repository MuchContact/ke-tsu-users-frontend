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
                <a className="navbar-brand" href="#">
                  <img alt="Brand"
                      src="https://c.na32.content.force.com/servlet/servlet.ImageServer?id=01550000000Yo0H&oid=00D500000007lOm&lastMod=1350290446000"
                      className="logo"/>
                </a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to="/" href="javascript: void(0)">Profile</Link></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="row">
            <div className="col-sm-6 col-md-4 jumbotron">
              <div className="thumbnail">
                <img src="" alt="User Picture" className="user-image"/>
                <div className="caption">
                  <h3>Zhang Liang</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="panel panel-default">
                <div className="panel-heading">Current Assignment</div>
                <ul className="list-group">
                  <li className="list-group-item">Project 1</li>
                </ul>
                <div className="panel-body">
                  <p>Project Description</p>
                </div>
              </div>
              <a href="#" className="btn btn-primary" role="button">History</a>
            </div>
          </div>
          <div className="row">
          </div>
        </div>
    );
  }
});

export default App;
