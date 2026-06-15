import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VR from './pages/VR';
import AR from './pages/AR';
import MR from './pages/MR';
import Future from './pages/Future';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vr" element={<VR />} />
            <Route path="/ar" element={<AR />} />
            <Route path="/mr" element={<MR />} />
            <Route path="/future" element={<Future />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
