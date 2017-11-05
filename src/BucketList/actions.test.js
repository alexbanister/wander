import * as actions from './actions';

describe('BucketList action', ()=>{
  const destination = {
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
  };

  it('addDestination should take object return an action', () => {
    const expected = {
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
    expect(actions.addDestination(destination)).toEqual(expected);
  });

  it('removeDestination should take object return an action', () => {
    const expected = {
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
    expect(actions.removeDestination(destination)).toEqual(expected);
  });
});
