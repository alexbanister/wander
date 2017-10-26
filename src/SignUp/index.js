import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SignUpAction } from './actions';


export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      retypePassword: '',
      signUpError: false,
      disabled: true,
      passwordValidationError: false
    };
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.SignUpAction({
      email: this.state.email,
      id: 1
    });
    this.setState({
      name: '',
      email: '',
      password: '',
      retypePassword: '',
      signUpError: false,
      disabled: true,
      passwordValidationError: false
    });
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value,
      disabled: !this.state.email || !this.state.password || !this.state.name
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSignUp(event)}>
        <input
          type='text'
          placeholder='Name'
          onChange={(event) => this.handleChange('name', event)}
        />
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
        <input
          type='password'
          placeholder='Please Retype Password'
          onChange={(event) => this.handleChange('retypePassword', event)}
        />
        <button type='submit'
          disabled={this.state.disabled}>
            Sign Up
        </button>
      </form>
    );
  }
}

SignUp.propTypes ={
  SignUpAction: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  SignUpAction: ( user ) => { dispatch(SignUpAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
