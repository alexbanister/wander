import { shallow } from 'enzyme';
import FlightCard from './index';
import React from 'react';


describe('FlightCard', () => {
  it('should always match the snapshot', () => {
    const itinerary = {
      price: '$1000',
      outbound: {
        flights: [{
          origin: 'DEN',
          originCity: 'Denver',
          flightNumber: '1234',
          destination: 'CDG',
          destinationCity: 'Paris',
          departureTime: 'now',
          arrivalTime: 'later'
        }],
        flightDuration: '2hrs 5mins'
      },
      inbound: {
        flights: [{
          origin: 'DEN',
          originCity: 'Denver',
          flightNumber: '1234',
          destination: 'CDG',
          destinationCity: 'Paris',
          departureTime: 'now',
          arrivalTime: 'later'
        }],
        flightDuration: '2hrs 5mins'
      }
    };
    const wrapper = shallow(<FlightCard
      itinerary={itinerary}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
