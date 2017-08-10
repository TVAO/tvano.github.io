import React, { Component } from 'react';
import logo from './logo.svg';
import NavComponent from './Nav.jsx';
import './App.css';
import './Nav.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <NavComponent />
        </div>
        <p className="App-content">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
