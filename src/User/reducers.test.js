import * as reducers from './reducers';

describe('user Reducers', () => {
  it('user should set default state', () => {
    const expectation = {};

    expect(reducers.user(undefined, {})).toEqual(expectation);
  });

  it('user should login', () => {
    const action = {
      type: 'LOGIN_ACTION',
      user: {
        email: 'email@email.com',
        password: 'password'
      }
    };

    expect(reducers.user(undefined, action)).toEqual(action.user);
  });

  it('user should sign up', () => {
    const action = {
      type: 'SIGN_UP_ACTION',
      user: {
        email: 'email@email.com',
        password: 'password'
      }
    };

    expect(reducers.user(undefined, action)).toEqual(action.user);
  });

  it('user should sign up', () => {
    const action = {
      type: 'SIGN_OUT_ACTION'
    };

    expect(reducers.user(undefined, action)).toEqual({});
  });
});

describe('isLoggedIn Reducers', () => {
  it('isLoggedIn should set default state', () => {
    expect(reducers.isLoggedIn(undefined, {})).toEqual(false);
  });

  it('isLoggedIn should login', () => {
    const action = {
      type: 'LOGIN_ACTION'
    };

    expect(reducers.isLoggedIn(undefined, action)).toEqual(true);
  });

  it('isLoggedIn should sign up', () => {
    const action = {
      type: 'SIGN_UP_ACTION'
    };

    expect(reducers.isLoggedIn(undefined, action)).toEqual(true);
  });

  it('isLoggedIn should sign up', () => {
    const action = {
      type: 'SIGN_OUT_ACTION'
    };

    expect(reducers.isLoggedIn(undefined, action)).toEqual(false);
  });
});
