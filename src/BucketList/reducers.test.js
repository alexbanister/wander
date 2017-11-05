import * as reducers from './reducers';

describe('Login action', ()=>{

  it('recentMovies should set default state', () => {
    const expectation = [];

    expect(reducers.destinations(undefined, {})).toEqual(expectation);
  });

  it('ADD_DESTINATION_ACTION should add a destination to state', () => {
    const action = {
      type: 'ADD_DESTINATION_ACTION',
      destination: {
        "name": "Denver International Airport ",
        "city": "Denver",
        "iata": "DEN",
        "country": {
          "name": "United States",
          "iso": "US"
        },
        "state": {
          "name": "Colorado",
          "abbr": "CO"
        }
      }
    };
    const expectation = action.destination;

    expect(reducers.destinations(undefined, action)).toEqual([expectation]);
  });

  it('REMOVE_DESTINATION_ACTION should remove a destination from state', () => {
    const initialState = [{
      "name": "Denver International Airport ",
      "city": "Denver",
      "iata": "DEN",
      "country": {
        "name": "United States",
        "iso": "US"
      },
      "state": {
        "name": "Colorado",
        "abbr": "CO"
      }
    }, {
      "name": "Providenciales International Airport",
      "city": "Providenciales",
      "iata": "PLS",
      "country": {
        "name": "Turks and Caicos Islands",
        "iso": "TC"
      },
      "state": {
        "name": "Providenciales",
        "abbr": null
      }
    }];
    const action = {
      type: 'REMOVE_DESTINATION_ACTION',
      destination: {
        "name": "Denver International Airport ",
        "city": "Denver",
        "iata": "DEN",
        "country": {
          "name": "United States",
          "iso": "US"
        },
        "state": {
          "name": "Colorado",
          "abbr": "CO"
        }
      }
    };
    const expectation = [{
      "name": "Providenciales International Airport",
      "city": "Providenciales",
      "iata": "PLS",
      "country": {
        "name": "Turks and Caicos Islands",
        "iso": "TC"
      },
      "state": {
        "name": "Providenciales",
        "abbr": null
      }
    }];

    expect(reducers.destinations(initialState, action)).toEqual(expectation);
  });
});
