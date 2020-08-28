import React, { Component } from 'react';
import './App.css';
import NavMenu from './NavMenu/NavMenu'
import Home from './Home/Home'
import HearChords from './HearChords/HearChords'
// import MyChords from './MyChords/MyChords'
// import Account from './Account/Account'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    notes: []
  }




  render() {
    return (
      <>
        <header><h1>ChordTester</h1></header>
        <NavMenu />
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          path='/hearchords'
          component={HearChords}
        />
        {/* <Route
          path='/mychords'
          component={MyChords}
        />
        <Route
          path='/account'
          component={Account}
        /> */}


      </>
    )
  }
}

export default App;
