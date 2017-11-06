import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import PreferencesContainer, { Preferences } from './index';
import React from 'react';


describe('Preferences', () => {
  it('Container should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = shallow(<PreferencesContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Preferences should match snapshot for sign up', () => {
    const wrapper = shallow(<Preferences />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Preferences should match snapshot for sign up', () => {
    const initialState = {
      departureAirport: '',
      budget: 0,
      departFlex: '0',
      returnFlex: '0',
      layoverMin: '1',
      layoverMax: '3',
      connections: '2',
      ratio: '1',
      airports: []
    };
    const expectation = {
      departureAirport: 'DE',
      budget: 100,
      departFlex: '2',
      returnFlex: '2',
      layoverMin: '4',
      layoverMax: '8',
      connections: '4',
      ratio: '3',
      airports: []
    };
    const wrapper = shallow(<Preferences />);

    expect(wrapper.state()).toEqual(initialState);

    const departureAirport = wrapper.find('[htmlFor="departureAirport"]').find('input');
    const budget = wrapper.find('[htmlFor="budget"]').find('input');
    const departFlex = wrapper.find('[htmlFor="departFlex"]').find('select');
    const returnFlex = wrapper.find('[htmlFor="returnFlex"]').find('select');
    const layoverMin = wrapper.find('[htmlFor="layoverMin"]').find('select');
    const layoverMax = wrapper.find('[htmlFor="layoverMax"]').find('select');
    const connections = wrapper.find('[htmlFor="connections"]').find('select');
    const ratio = wrapper.find('[htmlFor="ratio"]').find('select');

    departureAirport.simulate('change', { target: { value: 'DE' }});
    budget.simulate('change', { target: { value: 100 }});
    departFlex.simulate('change', { target: { value: '2' }});
    returnFlex.simulate('change', { target: { value: '2' }});
    layoverMin.simulate('change', { target: { value: '4' }});
    layoverMax.simulate('change', { target: { value: '8' }});
    connections.simulate('change', { target: { value: '4' }});
    ratio.simulate('change', { target: { value: '3' }});

    expect(wrapper.state()).toEqual(expectation);
  });
});
