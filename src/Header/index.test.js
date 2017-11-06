import { shallow } from 'enzyme';
import Header from './index';
import configureStore from 'redux-mock-store';
import React from 'react';


describe('Header', () => {
  it('should always match the snapshot when logged in', () => {
    const mockStore = configureStore();
    const initialState = { isLoggedIn: true };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should always match the snapshot when logged out', () => {
    const mockStore = configureStore();
    const initialState = { isLoggedIn: false };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
