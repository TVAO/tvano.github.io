
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css'

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
      <ul>
        <li className="leftHeader">  <Link to='/'> TVAO.IO </Link> </li>
        <li className="rightHeader"> <Link to='/about'> About </Link> </li>
        <li className="rightHeader"> <Link to='/projects'> Projects </Link> </li>
        <li className="rightHeader"> <Link to='/cv'> CV </Link> </li>
      </ul>
    </div>
    </nav>
);

export default Header;

/*

Old code:

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

 */
