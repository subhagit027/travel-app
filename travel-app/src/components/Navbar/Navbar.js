import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Brisphere</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#stays">Stays</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;