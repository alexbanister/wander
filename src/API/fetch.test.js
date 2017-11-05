import fetchMock from 'fetch-mock';
import { getFlights, getAirportCodeByCity } from './fetch';
import { airportCodesMock } from './testMocks';
import { mockData } from './mockAPI';

describe('Get Flights', () => {
  it('should return array of flight details', () => {
    const flights = getFlights();

    expect(flights).toEqual(mockData);
  });
});

describe('fetch airport codes', () => {
  it('should return an array of airports', async () => {
    fetchMock.get('begin:https://www.air-port-codes.com/api/v1/autocomplete', {
      status: 200,
      body: airportCodesMock
    });

    const airports = await getAirportCodeByCity('den');

    expect(airports).toEqual(airportCodesMock.airports);
  });
});
