import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addDestination, removeDestination } from './actions';
import { getAirportCodeByCity } from '../API/fetch';
import AirportCard from '../AirportCard/';
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

  handleSubmitForm(event) {
    event.preventDefault();
    this.props.addDestination(this.state.airports[0]);
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
    return this.state.airports.map( (airport, index) => {
      return (
        <AirportCard
          airport={airport}
          key={airport.iata + index}
          removeFlag={false}
          onClick={this.handleAddDestination.bind(this, airport)}
        />
      );
    });
  }

  displayDestinations(allDestinations) {
    return allDestinations.map( (airport, index) => (
      <AirportCard
        airport={airport}
        key={airport.iata + index}
        removeFlag={true}
        onClick={this.props.removeDestination.bind(this, airport)}
      />
    ));
  }

  render() {
    return (
      <div className='bucketlist'>
        <form onSubmit={(event) => this.handleSubmitForm(event)}>
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
        <button onClick={() => this.props.history.push('/search')}>
          Search All Destinations
        </button>
      </div>
    );
  }
}

BucketList.propTypes ={
  addDestination: PropTypes.func,
  removeDestination: PropTypes.func,
  history: PropTypes.object,
  destinations: PropTypes.array
};

const mapStateToProps =  (store) => ({
  destinations: store.destinations
});

const mapDispatchToProps = (dispatch) => ({
  addDestination: ( destination ) => { dispatch(addDestination(destination)); },
  removeDestination: ( destination ) => {
    dispatch(removeDestination(destination));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BucketList));
