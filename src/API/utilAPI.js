export const cleanData = (rawReturnArray, preferences, dates) => {
  const allFlights = rawReturnArray.reduce( (accum, destination) => {
    accum.flights = [...accum.flights, ...destination.trips.tripOption];
    accum.locationData.airport = [...accum.locationData.airport, ...destination.trips.data.airport];
    accum.locationData.city = [...accum.locationData.city, ...destination.trips.data.city];
    return accum;
  }, {
    flights: [],
    locationData: {
      airport: [],
      city: []
    }
  });
  allFlights.locationData.airport = Array.from(allFlights.locationData.airport);
  allFlights.locationData.city = Array.from(allFlights.locationData.city);

  return allFlights.flights.map( itinerary => (
    cleanItinerary(itinerary, allFlights.locationData, preferences, dates))
  ).sort( (alpha, beta) => beta.score - alpha.score);
};

export const cleanItinerary = (flight, locations, preferences, dates) => {
  return {
    price: flight.saleTotal.replace('USD', '$'),
    outbound: {
      flights: buildSegments(flight.slice[0].segment, locations),
      flightDuration: calcTravelTime(flight.slice[0].duration)
    },
    inbound: {
      flights:
        buildSegments(flight.slice.last().segment, locations),
      flightDuration:
        calcTravelTime(flight.slice.last().duration)
    },
    score: getItineraryScore(flight, preferences, dates)
  };
};

export const buildSegments = (segments, locations) => {
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

export const getItineraryScore = (flight, preferences, dates) => {
  const departScore = scoreDates(
    new Date(flight.slice[0].segment[0].leg[0].departureTime.split('T')[0]).getTime(),
    new Date(dates.departureDate).getTime(),
    preferences.departFlex
  );
  const returnScore = scoreDates(
    new Date(flight.slice.last().segment.last().leg.last().arrivalTime.split('T')[0]).getTime(),
    new Date(dates.returnDate).getTime(),
    preferences.returnFlex
  );
  const budgetScore = scoreBudget(
    parseInt(flight.saleTotal.replace('USD', ''), 10),
    preferences.budget
  );

  const layoverScore = scoreLayover(preferences.layoverMin, preferences.layoverMax, flight.slice);

  const connectionsScore = scoreConnections(flight.slice, preferences.connections);

  const scoreVactionDaysRatio = vactionDaysRatioScore(flight, preferences.ratio);

  return Math.round(Math.abs((
    departScore +
    returnScore +
    budgetScore +
    layoverScore +
    connectionsScore +
    scoreVactionDaysRatio
  ) / 6) * 100);
};

export const scoreDates = (actualDate, preferedDate, flexibility) => {
  const oneDay = 24*60*60*1000;
  const diffPoints =
     (Math.round(Math.abs((actualDate - preferedDate)/oneDay)))
     / parseInt(flexibility, 10);
  return diffPoints > 1 ? 1 : Math.abs(diffPoints - 1);
};

export const scoreBudget = (actualCost, budget) => {
  return budget > actualCost ? 1 : Math.abs(((actualCost - budget) / budget) - 1);
};

export const scoreLayover = (preferedMin, perferedMax, flights) => {
  const allLayovers = flights.reduce( (accum, slice) => {
    slice.segment.forEach( segment => {
      if (segment.connectionDuration) {
        accum.push(segment.connectionDuration / 60);
      }
    });
    return accum;
  }, []);
  const tooLong = allLayovers.filter( layover => layover > perferedMax )
    .map( layover => layover / perferedMax );
  const tooShort = allLayovers.filter( layover => layover < preferedMin )
    .map( layover => layover / preferedMin );
  const allScores = [...tooLong, ...tooShort];
  const totalScore = allScores.length > 0 ?
    allScores.reduce( (accum, score) => accum + score, 0) / allScores.length : 1;
  return totalScore > 1 ? 1 : totalScore;
};

export const scoreConnections = (flights, prefConnections) => {
  const connectionCounts = flights.reduce( (accum, oneWay) => {
    return [...accum, oneWay.segment.length];
  }, []);
  const connectionScores = connectionCounts.filter( connections => connections > prefConnections )
    .map( connection => prefConnections / connection );
  const totalScore = connectionScores.length > 0 ?
    connectionScores.reduce( (accum, score) => (accum + score) / 2, 0) : 1;

  return totalScore > 1 ? 1 : totalScore;
};

export const vactionDaysRatioScore = (flights, prefRatio) => {
  const oneDay = 24*60*60*1000;
  const travelDays = flights.slice.reduce( (accum, flight) => {
    return accum + Math.ceil((flight.duration / 60) / 24);
  }, 0);
  const timeOnHoliday = Math.floor((
    new Date(flights.slice.last().segment[0].leg[0].departureTime).getTime() -
    new Date(flights.slice[0].segment.last().leg.last().arrivalTime).getTime())
    / oneDay);
  const actualRatio =  timeOnHoliday / travelDays;
  return actualRatio > prefRatio ? 1 : actualRatio / prefRatio;
};

export const getCityName = (airport, locations) => {
  const cityCode = locations.airport.filter(
    location => location.code === airport
  );
  const cityName = locations.city.filter(
    location => location.code === cityCode[0].city
  );
  return cityName[0].name;
};

export const calcTravelTime = duration => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}hrs ${minutes}mins`;
};

export const makeTimeReadable = time => {
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
