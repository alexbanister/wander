import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDestination } from './actions';
import PropTypes from 'prop-types';

export class BucketList extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      disabled: true
    };
  }

  handleAddDestination(event) {
    event.preventDefault();
    this.props.addDestination(this.state.destination);
    this.setState({
      destination: '',
      disabled: true
    });
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value,
      disabled: !this.state.destination
    });
  }

  displayDestinations(allDestinations) {
    return allDestinations.map( (destination, index) => (
      <h3 key={index}>{destination}</h3>
    ));
  }

  render() {
    return (
      <div className='bucketlist'>
        <form onSubmit={(event) => this.handleAddDestination(event)}>
          <input
            type='text'
            placeholder='destination'
            onChange={(event) => this.handleChange('destination', event)}
          />
          <button type='submit'
            disabled={this.state.disabled}>
              Add Destination
          </button>
        </form>
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
