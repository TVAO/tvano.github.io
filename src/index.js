import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

const profileData = require('./data/resume.json');
//import * as profileData from './data/resume.json';

ReactDOM.render(
  <BrowserRouter>
    <App props={profileData}/>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
