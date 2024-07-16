import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleNavigationClick = (navItem) => {
    setActiveNavItem(navItem);
    setIsMenuVisible(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="makalogo" src="images/logo.png" alt="logo"></img>
      </div>
      {!isMobileScreen && (
        <div className="navigations">
          <Link to="/" className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('Home')}>
            Home
          </Link>
          <Link to="/about" className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('About')}>
            About
          </Link>
          <Link to="/services" className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('Services')}>
            Services
          </Link>
          <Link to="/team" className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('Team')}>
            Team
          </Link>
          <Link to="/contacts" className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''} pointer`}
            onClick={() => handleNavigationClick('Contacts')}>
            Contacts
          </Link>
        </div>
      )}
      {isMobileScreen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {isMobileScreen && isMenuVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleMenu}>
              &times;
            </span>
            <ol>
              <li className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('Home')}>
                <Link to="/">Home</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`} 
                onClick={() => handleNavigationClick('About')}>
                <Link to="/about">About</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('Services')}>
                <Link to="/services">Services</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('Team')}>
                <Link to="/team">Team</Link>
              </li>
              <li className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''} pointer`}
                onClick={() => handleNavigationClick('Contacts')}>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );}

  export default Navbar;