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

  render() {
    return (
      <form onSubmit={(event) => this.handleAddDestination(event)}>
        <input
          type='destination'
          placeholder='destination'
          onChange={(event) => this.handleChange('destination', event)}
        />
        <button type='submit'
          disabled={this.state.disabled}>
            Add Destination
        </button>
      </form>
    );
  }
}

BucketList.propTypes ={
  addDestination: PropTypes.func
};

const mapStateToProps =  (store) => ({
  destinations: store.destinations
});

const mapDispatchToProps = (dispatch) => ({
  addDestination: ( destination ) => { dispatch(addDestination(destination)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
