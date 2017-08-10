
import React from 'react';

class NavComponent extends React.Component {

  /*
  constructor(props) {
    super(props);
  }
  */
 
  render() {
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
};

export default NavComponent;
