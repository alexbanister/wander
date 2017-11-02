import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchResults } from './actions';
import { savePreferences } from '../Preferences/actions';
import { getFlights } from '../API/fetch.js';
import { cleanData } from '../API/utilAPI';
import FlightCard from '../FlightCard/';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      departureDate: '2017-12-24',
      returnDate: '2018-01-03'
    };
  }

  componentDidMount() {
    const preferences = JSON.parse(localStorage.getItem('travelPreferences'));
    if (!this.props.preferences.departureAirport) {
      this.props.savePreferences(preferences);
    }
  }

  searchFlights(event) {
    event.preventDefault();
    this.props.updateSearchResults(
      cleanData(getFlights(this.props.bucketList),
        this.props.preferences,
        this.state));
  }

  handleChangeDate(field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  buildTripCard(allFlights) {
    return allFlights.map( (itinerary, index) => {
      return (
        <FlightCard
          itinerary={itinerary}
          key={itinerary.price + index}/>
      );
    });
  }

  render() {
    return (
      <div className='search'>
        <div className='searchForm'>
          <form onSubmit={this.searchFlights.bind(this)}>
            <span className='depart'>
              <label htmlFor='departureDate'>Depart:</label>
              <input
                type="date"
                name="departureDate"
                value={this.state.departureDate}
                onChange={this.handleChangeDate.bind(this, 'departureDate')}/>
            </span>
            <span className='return'>
              <label htmlFor='returnDate'>Return:</label>
              <input
                type="date"
                name="returnDate"
                value={this.state.returnDate}
                onChange={this.handleChangeDate.bind(this, 'returnDate')}/>
            </span>
            <div className='sendSearch'>
              <button>Search</button>
            </div>
          </form>
        </div>
        <div className='searchResults'>
          {this.buildTripCard(this.props.searchResults)}
        </div>
      </div>
    );
  }
}

Search.propTypes ={
  updateSearchResults: PropTypes.func,
  savePreferences: PropTypes.func,
  searchResults: PropTypes.array,
  bucketList: PropTypes.array,
  preferences: PropTypes.object
};

const mapStateToProps =  (store) => ({
  bucketList: store.bucketList,
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
