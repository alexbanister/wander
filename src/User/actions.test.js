import * as actions from './actions';

describe('User action', ()=>{
  it('LOGIN_ACTION should take object return an action', () => {
    const user = {
      email: 'email@email.com',
      password: 'password'
    };
    const expected = {
      type: 'LOGIN_ACTION',
      user: {
        email: 'email@email.com',
        password: 'password'
      }
    };

    expect(actions.loginAction(user)).toEqual(expected);
  });

  it('SIGN_UP_ACTION should take object return an action', () => {
    const user = {
      email: 'email@email.com',
      password: 'password'
    };
    const expected = {
      type: 'SIGN_UP_ACTION',
      user: {
        email: 'email@email.com',
        password: 'password'
      }
    };

    expect(actions.signUpAction(user)).toEqual(expected);
  });

  it('SIGN_UP_ACTION should take object return an action', () => {
    const expected = {
      type: 'SIGN_OUT_ACTION'
    };

    expect(actions.signOutAction()).toEqual(expected);
  });
});
