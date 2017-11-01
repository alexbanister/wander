import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FlightCard = ({ itinerary }) => {

  const buildOneWay = (flights) => {
    return flights.map( (flight, index) => {
      const layover = flight.layover ? (
        <div className='layover'>
          <h5>Layover</h5>
          {flight.layover}
        </div>
      ) : '';
      return (
        <div className='oneway' key={`oneway${index}`}>
          <div className='top-row'>
            <span className='airport'>
              {flight.origin}
              <h6>{flight.originCity}</h6>
            </span>
            <span className='flightNumber'>
              {flight.flightNumber}
            </span>
            <span className='airport'>
              <h6>{flight.destinationCity}</h6>
              {flight.destination}
            </span>
          </div>
          <div className='second-row'>
            <span className='time'>
              {flight.departureTime}
            </span>
            <span className='flightTime'>
              {flight.flightDuration}
            </span>
            <span className='time'>
              {flight.arrivalTime}
            </span>
          </div>
          {layover}
        </div>
      );
    });
  };

  return (
    <div key={itinerary.price + Math.random()} className='FlightCard'>
      <div className='price'>
        {itinerary.price}
      </div>
      <div className='flights'>
        <div className='directionHeader'>
          <h3>Depart</h3>
          {itinerary.outbound.flightDuration}
        </div>
        <div>
          {buildOneWay(itinerary.outbound.flights)}
        </div>
        <div className='directionHeader'>
          <h3>Return</h3>
          {itinerary.inbound.flightDuration}
        </div>
        <div>
          {buildOneWay(itinerary.inbound.flights)}
        </div>
      </div>
    </div>
  );
};

FlightCard.propTypes ={
  itinerary: PropTypes.object
};

export default FlightCard;
