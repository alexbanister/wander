import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDestination } from './actions';
import { getAirportCodeByCity } from '../API/fetch';
import PropTypes from 'prop-types';

export class BucketList extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      airports: []
    };
  }

  handleAddDestination(airport) {
    this.props.addDestination(airport);
    this.setState({
      destination: '',
      airports: []
    });
  }

  async handleChange(event){
    const inputValue = event.target.value;
    let airportList = [];
    if (event.target.value.length > 2) {
      airportList = await getAirportCodeByCity(event.target.value);
    }
    this.setState({
      destination: inputValue,
      airports: airportList
    });
  }

  displayAirportList(){
    return this.state.airports.map( airport => {
      return (
        <div
          className='singleAirport'
          key={airport.iata}
          onClick={this.handleAddDestination.bind(this, airport)}>
          <div className='IATAcode'>{airport.iata}</div>
          <div className='airportName'>{airport.name}</div>
          <div className='airportCity'>
            {airport.city}, {airport.state.abbr}, {airport.country.name}
          </div>
        </div>
      );
    });
  }

  displayDestinations(allDestinations) {
    return allDestinations.map( (airport, index) => (
      <div className='singleAirport' key={index}>
        <div className='IATAcode'>{airport.iata}</div>
        <div className='airportName'>{airport.name}</div>
        <div className='airportCity'>
          {airport.city}, {airport.state.abbr}, {airport.country.name}
        </div>
        <span className='destinationRemove'>
          X
        </span>
      </div>
    ));
  }

  render() {
    return (
      <div className='bucketlist'>
        <form onSubmit={(event) => this.handleAddDestination(event)}>
          <input
            type='text'
            value={this.state.destination}
            placeholder='Add Destination'
            onChange={(event) => this.handleChange(event)}
          />
        </form>
        <div className='airportListContainer'>
          <div className='airportList'>
            {this.displayAirportList(this.state.airports)}
          </div>
        </div>
        <div className='destinationList'>
          {this.displayDestinations(this.props.destinations)}
        </div>
      </div>
    );
  }
}

BucketList.propTypes ={
  addDestination: PropTypes.func,
  destinations: PropTypes.array
};

const mapStateToProps =  (store) => ({
  destinations: store.destinations
});

const mapDispatchToProps = (dispatch) => ({
  addDestination: ( destination ) => { dispatch(addDestination(destination)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
