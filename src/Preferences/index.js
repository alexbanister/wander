import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { savePreferences } from './actions';
import { getAirportCodeByCity } from '../API/fetch';
import AirportCard from '../AirportCard/';
import PropTypes from 'prop-types';

export class Preferences extends Component {
  constructor() {
    super();
    this.state = {
      departureAirport: '',
      budget: 0,
      departFlex: '0',
      returnFlex: '0',
      layoverMin: '1',
      layoverMax: '3',
      connections: '2',
      ratio: '1',
      airports: []
    };
  }

  componentDidMount() {
    const preferences = JSON.parse(localStorage.getItem('travelPreferences'));
    if (preferences) {
      this.setState(preferences);
    }
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  async handleDisplayAirports(event) {
    const inputValue = event.target.value;
    let airportList = [];
    if (event.target.value.length > 2) {
      airportList = await getAirportCodeByCity(event.target.value);
    }
    this.setState({
      departureAirport: inputValue,
      airports: airportList
    });
  }

  handleSetHomeAirport(airport) {
    this.setState({
      departureAirport: airport.iata,
      airports: []
    });
  }

  displayAirportList(){
    return this.state.airports.map( (airport, index) => {
      return (
        <AirportCard
          airport={airport}
          key={airport.iata + index}
          removeFlag={false}
          onClick={this.handleSetHomeAirport.bind(this, airport)}
        />
      );
    });
  }

  buildHourDropDown() {
    let dropdown = [];
    for (let iter = 1; iter < 25; iter++) {
      dropdown.push(<option key={iter} value={iter}>{iter} Hours</option>);
    }
    return dropdown;
  }

  buildRatioDropDown() {
    let dropdown = [];
    for (let iter = 1; iter < 15; iter++) {
      const halfDay = iter + .5;
      dropdown.push(<option key={iter} value={iter}>{iter} Days</option>);
      dropdown.push(
        <option key={halfDay} value={halfDay}>{halfDay} Days</option>
      );
    }
    return dropdown;
  }

  savePreferences(event) {
    event.preventDefault();
    localStorage.setItem('travelPreferences', JSON.stringify(this.state));
    this.props.savePreferences(this.state);
    this.props.location.pathname = '/bucketList'
    this.props.match.path = '/bucketList'
    this.props.match.url = '/bucketList'
    this.props.history.push('/bucketList');
    console.log('props ', this.props);
  }

  render() {
    return (
      <div className='preferences'>
        <form onSubmit={(event) => this.savePreferences(event)}>
          <label htmlFor='departureAirport'>Departure Airport:
            <input
              type='text'
              value={this.state.departureAirport}
              name='departureAirport'
              placeholder='Departure Airport'
              onChange={(event) => this.handleDisplayAirports(event)}
            />
          </label>
          <div className='airportListContainer'>
            <div className='airportList'>
              {this.displayAirportList(this.state.airports)}
            </div>
          </div>
          <label htmlFor='budget'>Budget:
            <input
              type='text'
              value={this.state.budget}
              name='budget'
              placeholder='$'
              onChange={(event) => this.handleChange('budget', event)}
            />
          </label>
          <label>Default Flexibility:
            <div className='form-row'>
              <label htmlFor='departFlex'>Depart:
                <select
                  value={this.state.departFlex}
                  name='departFlex'
                  onChange={(event) => this.handleChange('departFlex', event)}>
                  <option value='0'>Exact</option>
                  <option value='1'>+/- 1 Day</option>
                  <option value='2'>+/- 2 Days</option>
                  <option value='3'>+/- 3 Days</option>
                </select>
              </label>
              <label htmlFor='returnFlex'>Return:
                <select
                  value={this.state.returnFlex}
                  name='returnFlex'
                  onChange={(event) => this.handleChange('returnFlex', event)}>
                  <option value='0'>Exact</option>
                  <option value='1'>+/- 1 Day</option>
                  <option value='2'>+/- 2 Days</option>
                  <option value='3'>+/- 3 Days</option>
                </select>
              </label>
            </div>
          </label>

          <label>Layovers:
            <div className='form-row'>
              <label htmlFor='layoverMin'>Minimum:
                <select
                  value={this.state.layoverMin}
                  name='layoverMin'
                  onChange={(event) => this.handleChange('layoverMin', event)}>
                  {this.buildHourDropDown()}
                </select>
              </label>
              <label htmlFor='layoverMax'>Maximum:
                <select
                  value={this.state.layoverMax}
                  name='layoverMax'
                  onChange={(event) => this.handleChange('layoverMax', event)}>
                  {this.buildHourDropDown()}
                </select>
              </label>
            </div>
          </label>

          <label htmlFor='connections'>
            Max number of connections each way:
            <select
              value={this.state.connections}
              name='connections'
              onChange={(event) => this.handleChange('connections', event)}>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3'>4</option>
              <option value='3'>5</option>
            </select>
          </label>

          <label htmlFor='ratio'>
            For every 1 travel day how any days at your destination do you want?
            <select
              value={this.state.ratio}
              name='ratio'
              onChange={(event) => this.handleChange('ratio', event)}>
              {this.buildRatioDropDown()}
            </select>
          </label>

          <button type='submit'>
              Save
          </button>
        </form>
      </div>
    );
  }
}

Preferences.propTypes ={
  savePreferences: PropTypes.func,
  history: PropTypes.object,
  preferences: PropTypes.object
};

const mapStateToProps =  (store) => ({
  preferences: store.preferences
});

const mapDispatchToProps = (dispatch) => ({
  savePreferences: ( preferences ) => {
    dispatch(savePreferences(preferences));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Preferences));
