import React from 'react';
import "./Navbar.css";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo HQ" className="logo"/>
        <span className="logo-text">HQs</span>
      </div>

      <ul>
        <li>Home</li>
        <li>HQs</li>
        <li>Favoritos</li>
      </ul>
    </nav>
  );
}

export default Navbar;