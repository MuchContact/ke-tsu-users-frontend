import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Link } from 'react-router';
import { CurrentUser, LogoutAction } from '../actions/actions';

const Navbar = React.createClass({
  logout() {
    this.props.dispatch(LogoutAction((() => {
      this.props.dispatch(this.props.pushState(null, "/login"));
    }).bind(this)));
  },
  render() {
    return (
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
            <a className="navbar-brand" href="#">ThoughtWorks</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/" href="javascript: void(0)">My Profile</Link></li>
              <li><a href="#" onClick={this.logout}>Logout</a></li>
            </ul>
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
