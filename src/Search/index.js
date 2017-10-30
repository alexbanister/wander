import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchResults } from './actions';
import { getFlights } from '../API/fetch.js';
import { cleanData } from '../API/utilAPI';
import PropTypes from 'prop-types';

export class Search extends Component {
  componentDidMount() {
    this.props.updateSearchResults(cleanData(getFlights()));
  }

  buildOneWay(flights) {
    return flights.map( (flight, index) => {
      const layover = flight.layover ? (
        <div className='layover'>
          {flight.layover}
        </div>
      ) : '';
      return (
        <div className='oneway' key={`oneway${index}`}>
          <div className='top-row'>
            <span className='airport'>
              {flight.origin}
            </span>
            <span className='flightNumber'>
              {flight.flightNumber}
            </span>
            <span className='airport'>
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
            <div>
              {itinerary.outbound.flightDuration}
            </div>
            <div>
              {this.buildOneWay(itinerary.outbound.flights)}
            </div>
            <div>
              return
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
  searchResults: PropTypes.array
};

const mapStateToProps =  (store) => ({
  searchResults: store.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchResults: ( destination ) => {
    dispatch(updateSearchResults(destination));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
