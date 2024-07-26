import React, { useState, useEffect } from 'react';
import './index.css';

const Navbar = ({ homeRef, aboutRef, servicesRef, teamRef, contactsRef }) => {
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

  const scrollToSection = (ref, navItem) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveNavItem(navItem);
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="makalogo" src="images/logo.png" alt="logo" />
      </div>
      {!isMobileScreen && (
        <div className="navigations">
   <button onClick={() => scrollToSection(homeRef, 'Home')} className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''}`}>
   Home
   </button>
          <button onClick={() => scrollToSection(aboutRef, 'About')} className={`nav-item ${activeNavItem === 'About' ? 'active' : ''}`}>
            About
          </button>
  <button onClick={() => scrollToSection(servicesRef, 'Services')} className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''}`}>    Services
          </button>
          <button onClick={() => scrollToSection(teamRef, 'Team')} className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''}`}>
     Team
    </button>
   <button onClick={() => scrollToSection(contactsRef, 'Contacts')} className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''}`}>
     Contacts
    </button>
        </div>
      )}
      {isMobileScreen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
        </div>
      )}
      {isMobileScreen && isMenuVisible && (
        <div className="modal">
          <div className="modal-content">
       <span className="close-button" onClick={toggleMenu}>
        &times;
     </span>
   <ol>
     <li className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''}`} onClick={() => scrollToSection(homeRef, 'Home')}>
      Home
   </li>
    <li className={`nav-item ${activeNavItem === 'About' ? 'active' : ''}`} onClick={() => scrollToSection(aboutRef, 'About')}>     About
    </li>
   <li className={`nav-item ${activeNavItem === 'Services' ? 'active' : ''}`} onClick={() => scrollToSection(servicesRef, 'Services')}>      Services
       </li>
    <li className={`nav-item ${activeNavItem === 'Team' ? 'active' : ''}`} onClick={() => scrollToSection(teamRef, 'Team')}>
      Team
     </li>
   <li className={`nav-item ${activeNavItem === 'Contacts' ? 'active' : ''}`} onClick={() => scrollToSection(contactsRef, 'Contacts')}>
         Contacts
     </li>
     </ol>
    </div>
          </div>
    )}
    </div>
  );
};

export default Navbar;