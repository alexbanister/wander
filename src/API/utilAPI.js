export const cleanData = (allFlights, preferences, dates) => {
  return allFlights.trips.tripOption.map( itinerary => cleanItinerary(itinerary, allFlights.trips.data, preferences, dates));
};

const cleanItinerary = (flight, locations, preferences, dates) => {
  return {
    price: flight.saleTotal.replace('USD', '$'),
    outbound: {
      flights: buildSegments(flight.slice[0].segment, locations),
      flightDuration: calcTravelTime(flight.slice[0].duration)
    },
    inbound: {
      flights:
        buildSegments(flight.slice[flight.slice.length-1].segment, locations),
      flightDuration:
        calcTravelTime(flight.slice[flight.slice.length-1].duration)
    },
    score: getItineraryScore(flight, preferences, dates)
  };
};

const buildSegments = (segments, locations) => {
  return segments.map( flight => {
    const flightObj = {
      origin: flight.leg[0].origin,
      originCity: getCityName(flight.leg[0].origin, locations),
      departureTime: makeTimeReadable(flight.leg[0].departureTime),
      flightNumber: flight.flight.carrier + flight.flight.number,
      flightDuration: calcTravelTime(flight.duration),
      destination: flight.leg[flight.leg.length-1].destination,
      destinationCity:
        getCityName(flight.leg[flight.leg.length-1].destination, locations),
      arrivalTime:
        makeTimeReadable(flight.leg[flight.leg.length-1].arrivalTime)
    };
    if (flight.connectionDuration) {
      Object.assign(flightObj,
        { layover: calcTravelTime(flight.connectionDuration) } );
    }
    return flightObj;
  });
};

const getItineraryScore = (flight, preferences, dates) => {
  const oneDay = 24*60*60*1000;
  const departDate =
    flight.slice[0].segment[0].leg[0].departureTime.split('T')[0];

  const actualDepartDate = new Date(departDate).getTime();
  const prefDepartDate = new Date(dates.departureDate).getTime();
  const departDiffPoints =
     (Math.round(Math.abs((actualDepartDate - prefDepartDate)/oneDay)))
     / parseInt(preferences.departFlex, 10);

  const returnDate =
    flight.slice.last().segment.last().leg.last().arrivalTime.split('T')[0];

  const actualReturnDate = new Date(returnDate).getTime();
  const prefReturnDate = new Date(dates.returnDate).getTime();
  const returnDiffPoints =
    (Math.round(Math.abs((actualReturnDate - prefReturnDate)/oneDay)))
    / parseInt(preferences.returnFlex, 10);

  const departScore = departDiffPoints > 1 ? 1 : departDiffPoints;
  const returnScore = returnDiffPoints > 1 ? 1 : returnDiffPoints;
  return Math.round(Math.abs(((departScore + returnScore) / 2) - 1) * 100);
};

const getCityName = (airport, locations) => {
  const cityCode = locations.airport.filter(
    location => location.code === airport
  );
  const cityName = locations.city.filter(
    location => location.code === cityCode[0].city
  );
  return cityName[0].name;
};

const calcTravelTime = duration => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % hours;
  return `${hours}hrs ${minutes}mins`;
};

const makeTimeReadable = time => {
  const options = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Date(time).toLocaleDateString('en-US', options);
};

// eslint-disable-next-line no-extend-native
Array.prototype.last = function(){
  return this[this.length - 1];
};
