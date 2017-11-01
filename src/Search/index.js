import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchResults } from './actions';
import { savePreferences } from '../Preferences/actions';
import { getFlights } from '../API/fetch.js';
import { cleanData } from '../API/utilAPI';
import PropTypes from 'prop-types';

export class Search extends Component {
  componentDidMount() {
    const preferences = JSON.parse(localStorage.getItem('travelPreferences'));
    if (!this.props.preferences.departureAirport) {
      this.props.savePreferences(preferences);
    }
    this.props.updateSearchResults(cleanData(getFlights(), preferences));
  }

  buildOneWay(flights) {
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
  }

  buildTripCard(allFlights) {
    return allFlights.map( (itinerary, index) => {
      return (
        <div key={index} className='FlightCard'>
          <div className='price'>
            {itinerary.price}
          </div>
          <div className='flights'>
            <div className='directionHeader'>
              <h3>Depart</h3>
              {itinerary.outbound.flightDuration}
            </div>
            <div>
              {this.buildOneWay(itinerary.outbound.flights)}
            </div>
            <div className='directionHeader'>
              <h3>Return</h3>
              {itinerary.inbound.flightDuration}
            </div>
            <div>
              {this.buildOneWay(itinerary.inbound.flights)}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='search'>
        {this.buildTripCard(this.props.searchResults)}
      </div>
    );
  }
}

Search.propTypes ={
  updateSearchResults: PropTypes.func,
  savePreferences: PropTypes.func,
  searchResults: PropTypes.array,
  preferences: PropTypes.object
};

const mapStateToProps =  (store) => ({
  searchResults: store.searchResults,
  preferences: store.preferences
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchResults: ( destination ) => {
    dispatch(updateSearchResults(destination));
  },
  savePreferences: ( preferences ) => {
    dispatch(savePreferences(preferences));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
