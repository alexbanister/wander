import React, { Component } from 'react';
import User from '../User/';
import './styles.css';

export default class Welcome extends Component {
  render() {
    return (
      <div className='welcome'>
        <h3>Make your Bucket List,</h3>
        <h3>your completed list</h3>
        <p>{
          'One place to save all the places you want to go and quickly search' +
          'for flights to all your destinations at one. You decide when you have' +
          "time to travel and how you want to travel and we'll show you all your" +
          'options and how well they match what you want.'
        }</p>
        <div className='auth'>
          <span className='form-block'>
            <h4>Login</h4>
            <User />
          </span>
          <span className='form-block'>
            <h4>Signup</h4>
            <User form='signup' />
          </span>
        </div>
      </div>
    );
  }
}
