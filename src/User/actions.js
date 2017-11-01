export const LoginAction = (user) => {
  return {
    type: 'LOGIN_ACTION',
    user
  };
};

export const SignUpAction = (user) => {
  return {
    type: 'SIGN_UP_ACTION',
    user
  };
};

export const SignOutAction = () => {
  return {
    type: 'SIGN_OUT_ACTION'
  };
};
