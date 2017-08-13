import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
      <ul id="headerItems">
        <li className="leftHeader">  <Link to='/'> TVAO.IO </Link> </li>
        <li className="rightHeader"> <Link to='/about'> About </Link> </li>
        <li className="rightHeader"> <Link to='/portfolio'> Portfolio </Link> </li>
        <li className="rightHeader"> <Link to='/skills'> Skills </Link> </li>
        <li className="rightHeader"> <Link to='/education'> Education </Link> </li>
        <li className="rightHeader"> <Link to='/work'> Work </Link> </li>

      </ul>
    </div>
    </nav>
);

export default Header;
