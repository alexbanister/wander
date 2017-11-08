import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction, signUpAction, signOutAction } from './actions';
import LogIn from '../LogIn/';
import SignUp from '../SignUp/';
import PropTypes from 'prop-types';

export class User extends Component {
  componentDidMount() {
    if (this.props.signOut) {
      this.props.signOutAction();
    }
  }
  getFormToLoad(formFlag) {
    return formFlag === 'signup' ?
      <SignUp handleSubmit={(user) => this.props.signUpAction(user)} /> :
      <LogIn  handleSubmit={(user) => this.props.loginAction(user)} />;
  }

  render() {
    return (
      this.getFormToLoad(this.props.form)
    );
  }
}

User.propTypes ={
  loginAction: PropTypes.func,
  signUpAction: PropTypes.func,
  signOutAction: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.bool,
  form: PropTypes.string
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(loginAction(user)); },
  signOutAction: () => { dispatch(signOutAction()); },
  signUpAction: ( user ) => { dispatch(signUpAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
