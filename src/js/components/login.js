import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { LoginAction } from '../actions/actions';

const Login = React.createClass({
  onClickSubmit(e) {
    e.preventDefault();
    this.props.dispatch(LoginAction({
      user_name: this.refs.name.value
    }));
  },

  componentWillReceiveProps(nextProps){
    if(nextProps.current_user != undefined){
      this.props.dispatch(this.props.pushState(null, '/'));
    }
  },

  render() {
    return (
      <form onSubmit={this.onClickSubmit} className="form-signin">
        <div className="form-group">
          <label>Please Link to Our System by User Name</label>
          <input type="text" className="form-control" placeholder="User Name" ref="name"/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref="password"/>
          </div>
        <button className="btn btn-lg btn-primary btn-block"
                type="submit">
                Login
        </button>
      </form>
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
})(Login);
