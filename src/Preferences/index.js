import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences } from './actions';
import PropTypes from 'prop-types';

export class Preferences extends Component {
  constructor() {
    super();
    this.state = {
      departureAirport: '',
      departFlex: '0',
      returnFlex: '0',
      layoverMin: '1',
      layoverMax: '3',
      connections: '2',
      ratio: '1'
    };
  }

  componentDidMount() {
    if (this.props.preferences) {
      this.setState(this.props.preferences);
    }
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value
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
    this.props.savePreferences(this.state);
  }

  render() {
    return (
      <div className='preferences'>
        <form onSubmit={(event) => this.savePreferences(event)}>
          <label htmlFor='departureAirport'>Departure Airport:</label>
          <input
            type='text'
            value={this.state.departureAirport}
            name='departureAirport'
            placeholder='departureAirport'
            onChange={(event) => this.handleChange('departureAirport', event)}
          />
          <label>Default Flexibility:</label>
          <label htmlFor='departFlex'>Depart:</label>
          <select
            value={this.state.departFlex}
            name='departFlex'
            onChange={(event) => this.handleChange('departFlex', event)}>
            <option value='0'>Exact</option>
            <option value='1'>+/- 1 Day</option>
            <option value='2'>+/- 2 Days</option>
            <option value='3'>+/- 3 Days</option>
          </select>
          <label htmlFor='returnFlex'>Depart:</label>
          <select
            value={this.state.returnFlex}
            name='returnFlex'
            onChange={(event) => this.handleChange('returnFlex', event)}>
            <option value='0'>Exact</option>
            <option value='1'>+/- 1 Day</option>
            <option value='2'>+/- 2 Days</option>
            <option value='3'>+/- 3 Days</option>
          </select>

          <label>Layovers:</label>
          <label htmlFor='layoverMin'>Minimum:</label>
          <select
            value={this.state.layoverMin}
            name='layoverMin'
            onChange={(event) => this.handleChange('layoverMin', event)}>
            {this.buildHourDropDown()}
          </select>
          <label htmlFor='layoverMax'>Maximum:</label>
          <select
            value={this.state.layoverMax}
            name='layoverMax'
            onChange={(event) => this.handleChange('layoverMax', event)}>
            {this.buildHourDropDown()}
          </select>

          <label htmlFor='connections'>
            Max number of connections each way:
          </label>
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

          <label htmlFor='ratio'>
            For every 1 travel day how any days at your destination do you want?
          </label>
          <select
            value={this.state.returnFlex}
            name='ratio'
            onChange={(event) => this.handleChange('ratio', event)}>
            {this.buildRatioDropDown()}
          </select>

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

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
