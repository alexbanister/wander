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
            useKey={false}
            key='Welcome'/>
          <Route
            exact path='/login'
            component={User}
            useKey={false}
            key='Login'/>
          <Route
            exact path='/signOut'
            render={()=> <User signOut={true} />}
            useKey={false}
            key='signOut'/>
          <Route
            exact path='/signup'
            render={()=> <User form='signup' />}
            useKey={false}
            key='signup'/>
          <Route
            exact path='/bucketList'
            component={BucketList}
            useKey={false}
            key='BucketList'/>
          <Route
            exact path='/preferences'
            component={Preferences}
            useKey={false}
            key='Preferences'/>
          <Route
            exact path='/search'
            component={Search}
            useKey={false}
            key='Search'/>
        </main>
      </div>
    );
  }
}

export default App;
