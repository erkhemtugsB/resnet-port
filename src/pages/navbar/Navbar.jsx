// Import necessary modules
import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';




// Navbar component
const Navbar = () => {
  return (
    <div className='nav'>
      <h1>RESNET</h1>
      <div className='nav-wrapper'>
        <Link to="/Ostrander">
          OST
        </Link>
        <Link to="/crownhart">
          CHT
        </Link>
        <Link to="/cm">
          CM
        </Link>
        <Link to="/ross">
          Ross
        </Link>
        <Link to="/hawkes">
          Hawkes
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
