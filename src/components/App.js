import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Footer.css';

const App = () => (
  <div className="App">
    <Header />
    <Content />
    <Footer />
  </div>
)

export default App;
