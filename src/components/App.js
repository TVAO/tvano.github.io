import React from 'react';
import Header from './header';
import Routes from './routes';
import Footer from './footer';

import '../styles/app.css';
import '../styles/header.css';
import '../styles/footer.css';

const App = ({props}) => (

  <div className="App">
    <Header />
    <Routes props={props}/>
    <Footer />
  </div>
)

export default App;
