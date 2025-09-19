import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/home/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;