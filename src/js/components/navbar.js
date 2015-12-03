import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Link } from 'react-router';

const Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="">
              <img alt="Brand"
                  src="https://c.na32.content.force.com/servlet/servlet.ImageServer?id=01550000000Yo0H&oid=00D500000007lOm&lastMod=1350290446000"
                  className="logo"/>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/" href="javascript: void(0)">My Profile</Link></li>
              <li><Link to="/login" href="javascript: void(0)">Login</Link></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
});

function mapStateToProps(state) {
  return {
    'current_user': state['current_user']
  };
}

export default connect(mapStateToProps, (dispatch) => {
  return {
    pushState,
    dispatch
  }
})(Navbar);
