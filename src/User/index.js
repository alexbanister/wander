import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction, SignUpAction } from './actions';
import LogIn from '../LogIn/';
import SignUp from '../SignUp/';
import PropTypes from 'prop-types';

export class User extends Component {
  getFormToLoad(formFlag) {
    return formFlag === 'signup' ?
      <SignUp handleSubmit={(user) => this.props.SignUpAction(user)} /> :
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
  SignUpAction: PropTypes.func,
  user: PropTypes.object,
  form: PropTypes.string
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(LoginAction(user)); },
  SignUpAction: ( user ) => { dispatch(SignUpAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
