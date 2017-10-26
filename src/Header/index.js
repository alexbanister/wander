import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

class App extends Component {
  render() {
    return (
      <header>
        <h1>Wander</h1>
        <nav>
          <NavLink to='/'>Log In</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/bucketList'>Bucket List</NavLink>
        </nav>
      </header>
    );
  }
}

export default App;
