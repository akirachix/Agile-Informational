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

  const smoothScrollTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavItemClick = (event, target) => {
    event.preventDefault();
    smoothScrollTo(target);
    if (isMobileScreen) {
      setIsMenuVisible(false); // Close the menu on mobile
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="makalogo" src="images/logo.png" alt="logo" />
      </div>
      {!isMobileScreen && (
        <div className="navigations">
          <span className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'landing')}>
            Home
          </span>
          <span className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'about')}>
            About
          </span>
          <span className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'services')}>
            Services
          </span>
          <span className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'team')}>
            Team
          </span>
          <Link to="/contacts" className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''} pointer`}>
            Contacts
          </Link>
        </div>
      )}
      {isMobileScreen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {isMobileScreen && isMenuVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleMenu}>
              &times;
            </span>
            <ol>
              <li className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'landing')}>
                Home
              </li>
              <li className={`nav-item ${activeNavItem === 'About' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'about')}>
                About
              </li>
              <li className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'services')}>
                Services
              </li>
              <li className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''} pointer`} onClick={(event) => handleNavItemClick(event, 'team')}>
                Team
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