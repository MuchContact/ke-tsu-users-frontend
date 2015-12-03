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
                <a class="navbar-brand" href="#">
                  <img alt="Brand" src="https://c.na32.content.force.com/servlet/servlet.ImageServer?id=01550000000Yo0H&oid=00D500000007lOm&lastMod=1350290446000"/>
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
          <div className="container">
            {this.props.children}
          </div>
        </div>
    );
  }
});

export default App;
