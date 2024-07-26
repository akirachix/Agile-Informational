import React, { useRef } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import Services from './Services';
import Team from './Team';
import './index.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <div>
      <Navbar 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        servicesRef={servicesRef} 
        teamRef={teamRef} 
      />
      <div ref={homeRef}>
        <LandingPage />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
    </div>
  );
};

export default App;