import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/';
import Welcome from '../Welcome/';
import User from '../User/';
import BucketList from '../BucketList/';
import Preferences from '../Preferences/';
import Search from '../Search/';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Route
            exact path='/'
            component={Welcome}
            key='Welcome'/>
          <Route
            exact path='/login'
            component={User}
            key='Login'/>
          <Route
            exact path='/signup'
            render={()=> <User form='signup' />}
            key='signup'/>
          <Route
            exact path='/bucketList'
            component={BucketList}
            key='BucketList'/>
          <Route
            exact path='/preferences'
            component={Preferences}
            key='Preferences'/>
          <Route
            exact path='/search'
            component={Search}
            key='Search'/>
        </main>
      </div>
    );
  }
}

export default App;
