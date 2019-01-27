import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

      </div>
    );
  }
}

export default App;