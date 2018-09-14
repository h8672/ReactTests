import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// UI components
import NavMenu from './components-UI/nav-menu/nav-menu'

// Application components
import Gantt from './components/gantt/gantt'
import Points from './components/points/points'

import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    //Login
    //Fetch data
    return (
      <div className="App">
        <header className="App-header">
          <NavMenu />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route path="/gantt" component={Gantt} />
          <Route path="/points" component={Points} />
        </Switch>
      </div>
    );
  }
}

export default App;
