import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import UserContainer, { User } from './index';
import React from 'react';


describe('User', () => {
  it('Container should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = shallow(<UserContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('User should match snapshot for sign up', () => {
    const wrapper = shallow(<User
      formFlag='signup'
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('User should match snapshot for login', () => {
    const wrapper = shallow(<User />);

    expect(wrapper).toMatchSnapshot();
  });
});
