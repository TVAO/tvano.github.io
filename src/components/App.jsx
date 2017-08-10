import React, { Component } from 'react';
import NavComponent from './Nav';
import ContentComponent from './Content';
import FooterComponent from './Footer';
import '../styles/App.css';
import '../styles/Nav.css';
import '../styles/Content.css';
import '../styles/Footer.css';

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
        <div className="App-footer">
            <FooterComponent />
        </div>
      </div>
    );
  }
}

export default App;
