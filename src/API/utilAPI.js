export const cleanData = allFlights => {
  return allFlights.trips.tripOption.map( itinerary => cleanItinerary(itinerary));
};

const cleanItinerary = flight => {
  return {
    price: flight.saleTotal.replace('USD', '$'),
    outbound: {
      flights: buildSegments(flight.slice[0].segment),
      flightDuration: calcTravelTime(flight.slice[0].duration)
    },
    inbound: {
      flights:
        buildSegments(flight.slice[flight.slice.length-1].segment),
      flightDuration:
        calcTravelTime(flight.slice[flight.slice.length-1].duration)
    }
  };
};

const buildSegments = segments => {
  return segments.map( flight => {
    const flightObj = {
      origin: flight.leg[0].origin,
      departureTime: makeTimeReadable(flight.leg[0].departureTime),
      flightNumber: flight.flight.carrier + flight.flight.number,
      flightDuration: calcTravelTime(flight.duration),
      destination: flight.leg[flight.leg.length-1].destination,
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
