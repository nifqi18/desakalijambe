import React, { Component } from 'react';
import './App.css';
import CountDown from './views/countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountDown />
      </div>
    );
  }
}

export default App;
