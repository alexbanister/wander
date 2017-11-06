import * as reducers from './reducers';

describe('preferences Reducers', () => {
  it('preferences should set default state', () => {
    const expectation = {};

    expect(reducers.preferences(undefined, {})).toEqual(expectation);
  });

  it('preferences should update', () => {
    const action = {
      type: 'SAVE_PREFERENCES',
      preferences: { minLayover: 1 }
    };

    expect(reducers.preferences(undefined, action)).toEqual(action.preferences);
  });
});
