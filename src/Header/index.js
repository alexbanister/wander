import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';

const Header = (props) => {
  return (
    <header>
      <h1>Wander</h1>
      { props.isLoggedIn ? (
        <nav>
          <NavLink to='/preferences'>Preferences</NavLink>
          <NavLink to='/bucketList'>Bucket List</NavLink>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/signOut'>Sign Out</NavLink>
        </nav>
      ) : (
        <nav>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
        </nav>
      )}
    </header>
  );
};

Header.propTypes ={
  isLoggedIn: PropTypes.bool
};

const mapStateToProps =  (store) => ({
  isLoggedIn: store.isLoggedIn
});

export default withRouter(connect(mapStateToProps, null)(Header));
