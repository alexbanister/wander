import { shallow } from 'enzyme';
import AirportCard from './index';
import React from 'react';


describe('AirportCard', () => {
  it('should always match the snapshot', () => {
    const airport = {
      iata: 'DEN',
      name: 'Denver',
      city: 'Denver',
      state: {
        abbr: 'CO'
      },
      country: {
        name: 'USA'
      }
    };
    const wrapper = shallow(<AirportCard
      airport={airport}
      onClick={jest.fn()}
      removeFlag={false}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
