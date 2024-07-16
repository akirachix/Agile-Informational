import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Team from './Team';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <Team />
            </>
          } />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;