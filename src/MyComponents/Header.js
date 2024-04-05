// Header.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Header.css';

import { Link } from 'react-router-dom';

export default function Header(props) {
 
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
<nav className="navbar">
      <div className="brand">
        <span>Internworld</span>
      </div>
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li> <Link className="nav-link" aria-current="page" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><Link className="nav-link" to="/services">Services</Link></li>
        <li><Link className="nav-link" to="/team">Team</Link></li>
        <li><Link className="nav-link" to="/login-signup">Login/SignUp</Link></li>
        <li><input className='nav-input' type='search' placeholder='search'></input></li>
        <li><button className="join-btn">Join Us</button></li>
      </ul>
    </nav>

  );
}
 


