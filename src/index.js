import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

/* Replace HashRouter with BrowserRouter for dynamic routing */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
