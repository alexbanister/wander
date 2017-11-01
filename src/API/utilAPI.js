export const cleanData = allFlights => {
  return allFlights.trips.tripOption.map( itinerary => cleanItinerary(itinerary, allFlights.trips.data));
};

const cleanItinerary = (flight, locations) => {
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
    score: getItineraryScore(flight)
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

const getItineraryScore = flight => {
  console.log(flight);
  return 5;
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
