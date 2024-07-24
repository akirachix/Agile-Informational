import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveNavItem('Home');
    } else if (path === '/about') {
      setActiveNavItem('About');
    } else if (path === '/services') {
      setActiveNavItem('Services');
    } else if (path === '/team') {
      setActiveNavItem('Team');
    } else if (path === '/contacts') {
      setActiveNavItem('Contacts');
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="makalogo" src="images/logo.png" alt="logo"></img>
      </div>
      {!isMobileScreen && (
        <div className="navigations">
          <Link to="/" className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}>
            Home
          </Link>
          <Link to="/about" className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`}>
            About
          </Link>
          <Link to="/services" className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`}>
            Services
          </Link>
          <Link to="/team" className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''} pointer`}>
            Team
          </Link>
          <Link to="/contacts" className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''} pointer`}>
            Contacts
          </Link>
        </div>
      )}
      {isMobileScreen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          __<br/>__
        </div>
      )}
      {isMobileScreen && isMenuVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleMenu}>
              &times;
            </span>
            <ol>
              <li className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`}>
                <Link to="/services">Services</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''} pointer`}>
                <Link to="/team">Team</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''} pointer`}>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;