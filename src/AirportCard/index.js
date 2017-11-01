import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const AirportCard = ({ airport, onClick, removeFlag }) => {
  let removeButton = removeFlag ?
    <span className='destinationRemove' onClick={onClick}>X</span> :
    '';
  let addClick = removeFlag ? ()=>{} : onClick;
  return (
    <div className='singleAirport' onClick={addClick}
      key={airport.iata}>
      <div className='IATAcode'>{airport.iata}</div>
      <div className='airportName'>{airport.name}</div>
      <div className='airportCity'>
        {airport.city}, {airport.state.abbr}, {airport.country.name}
      </div>
      {removeButton}
    </div>
  );
};

AirportCard.propTypes ={
  onClick: PropTypes.func,
  removeFlag: PropTypes.bool,
  airport: PropTypes.object
};

export default AirportCard;
