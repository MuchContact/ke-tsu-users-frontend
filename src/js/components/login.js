import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { LoginAction } from '../actions/actions';

const Login = React.createClass({
  onClickSubmit(e) {
    e.preventDefault();
    this.props.dispatch(LoginAction({
      name: this.refs.name.value,
      password: this.refs.password.value
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
          <label>Please Link to Our System by Userid</label>
          <input type="text" className="form-control" placeholder="UserId" ref="userid"/>
        </div>
        <button className="btn btn-lg btn-primary btn-block"
                type="submit">
                Enter
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
