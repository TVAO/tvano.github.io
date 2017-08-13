import React from 'react';
import Header from './header';
import Routes from './routes';
import Footer from './footer';

import '../styles/app.css';
import '../styles/header.css';
import '../styles/footer.css';

//import * as DATA from '../data/resume.json';
//const DATA = require('../data/resume.json');

const App = ({props}) => (

  <div className="App">
    <Header />
    <Routes />
    <h1> {props.basics.name} </h1>
    <Footer />
  </div>
)

export default App;
