import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/brewcrafters-high-resolution-logo.png'; 
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-center">
          <Link to="/">
            <img src={logo} alt="Brewcrafters Logo" className="logo" />
          </Link>
        </div>

        <div className={`navbar-middle ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul className="navbar-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/catering">Catering</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/subscribe">Subscribe</Link></li>
              <li><Link to="/bookings">Booking</Link></li>
              <li><Link to="/location">Locations</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </nav>
        </div>

        <div className="navbar-right">
          <nav>
            <ul className="navbar-icons">
              <li><Link to="/login"><CgProfile /></Link></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-shopping-cart"></i></li>
            </ul>
          </nav>
        </div>

        <div className="navbar-actions">
          <FaBars className="hamburger" onClick={toggleMobileMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
