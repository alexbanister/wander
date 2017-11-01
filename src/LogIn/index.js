import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

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
    this.props.handleSubmit({
      email: this.state.email,
      id: 1
    });
    this.props.history.push('/preferences');
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value,
      disabled: !this.state.email || !this.state.password
    });
  }

  render() {
    return (
      <div className='login'>
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
        {"Don't have an account?"}<br />
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
}

LogIn.propTypes ={
  handleSubmit: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default withRouter(LogIn);
