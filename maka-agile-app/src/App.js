import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Team from './Team';
import "./index.css"
import Services from "./Services";
import AboutUs from "./AboutUs";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <AboutUs/>
              <Services/>
              <Team />
            </>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
