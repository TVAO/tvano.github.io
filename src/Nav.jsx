
import React from 'react';
import ReactDOM from 'react-dom';

const NavComponent = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="wideDiv">
            <a href="#"> Home </a>
            <a href="#"> About </a>
            <a href="#"> Projects </a>
          </div>
        </div>
      </nav>
    );
  }
});

export default NavComponent;
