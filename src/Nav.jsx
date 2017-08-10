
import React from 'react';
import ReactDOM from 'react-dom';

const NavComponent = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="nav navbar-nav navbar-right">
            <a href="#"> About Me </a>
            <a href="#"> Projects </a>
            <a href="#"> CV </a>
            <a href="#" className="leftItem"> TVANO.IO </a>
          </div>
        </div>
      </nav>
    );
  }
});

export default NavComponent;
