import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import SearchContainer, { Search } from './index';
import React from 'react';


describe('Search', () => {
  it('Container should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = { preferences: { departureAirport: '' } };
    const store = mockStore(initialState);
    const wrapper = shallow(<SearchContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Search should match snapshot', () => {
    const wrapper = shallow(<Search
      searchResults={[]}
      preferences={{ departureAirport: '' }}
      savePreferences={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Search should change date', () => {
    const initialState = {
      departureDate: '2017-12-24',
      returnDate: '2018-01-03'
    };
    const expectation = {
      departureDate: '2018-01-20',
      returnDate: '2018-02-29'
    };
    const wrapper = shallow(<Search
      searchResults={[]}
      preferences={{ departureAirport: '' }}
      savePreferences={jest.fn()}
    />);

    expect(wrapper.state()).toEqual(initialState);

    const departDate = wrapper.find('input').first();
    const returnDate = wrapper.find('input').last();

    departDate.simulate('change', { target: { value: '2018-01-20' }});
    returnDate.simulate('change', { target: { value: '2018-02-29' }});

    expect(wrapper.state()).toEqual(expectation);
  });
});
