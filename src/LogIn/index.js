import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction } from './actions';
import PropTypes from 'prop-types';

export class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true
    };
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.loginAction({
      email: this.state.email,
      id: 1
    });
    this.setState({
      email: '',
      password: '',
      disabled: true
    });
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value,
      disabled: !this.state.email || !this.state.password
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleLogin(event)}>
        <input
          type='email'
          placeholder='Email'
          onChange={(event) => this.handleChange('email', event)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(event) => this.handleChange('password', event)}
        />
        <button type='submit'
          disabled={this.state.disabled}>
            Sign Up
        </button>
      </form>
    );
  }
}

LogIn.propTypes ={
  loginAction: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(LoginAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
