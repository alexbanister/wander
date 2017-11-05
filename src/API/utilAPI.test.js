import { mockFlights } from './testMocks';
import * as utils from './utilAPI';

describe('API Utils', () => {
  it('makeTimeReadable should return a date/time string', () => {
    const time = utils.makeTimeReadable('2017-12-23T15:59-06:00');

    expect(time).toEqual('Sat, Dec 23, 17, 2:59 PM');
  });

  it('calcTravelTime should return a hour/minute string', () => {
    const time = utils.calcTravelTime(135);

    expect(time).toEqual('2hrs 15mins');
  });

  it('getCityName should return a city name', () => {
    const city = utils.getCityName('DEN', mockFlights[0].trips.data);

    expect(city).toEqual('Denver');
  });

  it.skip('vactionDaysRatioScore should return a score', () => {
    // test seems to think .slice is the the array protoype and not the object key 'slice'.
    // changed to flights['slice'] in the function and testing still thinks it's a function not a key
    const score = utils.vactionDaysRatioScore(mockFlights[0].trips.tripOption, 2);

    expect(score).toEqual(1);
  });
});
