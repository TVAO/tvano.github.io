import React, { Component } from 'react';
import NavComponent from './Nav.jsx';
import ContentComponent from './Content.jsx'
import './App.css';
import './Nav.css';
import './Content.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <NavComponent />
        </div>
        <div className="App-content">
            <ContentComponent />
        </div>
      </div>
    );
  }
}

export default App;
