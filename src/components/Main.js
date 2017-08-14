import React from 'react';
import '../styles/main.css';

const Main = () => (
  <div>
    <div className="top">
      <img className="img-circle" alt="TVANO" id="picture"
        src="images/Thor.png"/>
      <h1 className="text-center"> Hi! My name is Thor </h1>
      <h2 className="text-center text-muted"> ... and I build for the web </h2>
      <ul className="inline text-center">
        <li>
          <a href="mailto:thorolesen14@gmail.com">
            <b> Email </b>
          </a>
        </li>
        <li>
          <a href="https://github.com/TVAO">
            <b> Github </b>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thor-olesen-63988a9b">
            <b> LinkedIn </b>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Main;
