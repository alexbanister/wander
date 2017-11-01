import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction, SignUpAction, SignOutAction } from './actions';
import LogIn from '../LogIn/';
import SignUp from '../SignUp/';
import PropTypes from 'prop-types';

export class User extends Component {
  componentDidMount() {
    if (this.props.signOut) {
      this.props.SignOutAction();
    }
  }
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
  SignOutAction: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.bool,
  form: PropTypes.string
};

const mapStateToProps =  (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: ( user ) => { dispatch(LoginAction(user)); },
  SignOutAction: () => { dispatch(SignOutAction()); },
  SignUpAction: ( user ) => { dispatch(SignUpAction(user)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
