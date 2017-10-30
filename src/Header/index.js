import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Wonder <strong>&</strong> WANDER</h1>
        <nav>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/bucketList'>Bucket List</NavLink>
          <NavLink to='/preferences'>Preferences</NavLink>
        </nav>
      </header>
    );
  }
}
