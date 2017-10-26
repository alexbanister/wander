import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/';
import SignUp from '../SignUp/';
import LogIn from '../LogIn/';
import BucketList from '../BucketList/';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path='/' component={LogIn} key='LogIn'/>
        <Route exact path='/signup' component={SignUp} key='SignUp'/>
        <Route exact path='/bucketList' component={BucketList} key='BucketList'/>
      </div>
    );
  }
}

export default App;
