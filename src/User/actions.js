export const loginAction = (user) => {
  return {
    type: 'LOGIN_ACTION',
    user
  };
};

export const signUpAction = (user) => {
  return {
    type: 'SIGN_UP_ACTION',
    user
  };
};

export const signOutAction = () => {
  return {
    type: 'SIGN_OUT_ACTION'
  };
};
