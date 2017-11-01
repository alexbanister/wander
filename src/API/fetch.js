import { mockData } from "./mockAPI";
import { airportCodesAPIkey, airportCodesSecretKey } from './apiKey';

const airportCodesBaseURL =
  'https://www.air-port-codes.com/api/v1/autocomplete';

export const getFlights = options => {
  return mockData;
};

export const getAirportCodeByCity = city => {
  const apiString = `${airportCodesBaseURL}?term=${city}&key=${airportCodesAPIkey}&secret=${airportCodesSecretKey}`;
  return fetch(apiString, { method: 'GET' })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.airports || []);
};
