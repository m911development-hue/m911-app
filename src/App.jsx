import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Geapi from './pages/Geapi';
import Holobox from './pages/Holobox';
import Monotech from './pages/Monotech';
import Nbg from './pages/Nbg';
import Piindustries from './pages/Piindustries';
import Tafear from './pages/Tafear';
import TafeSandune from './pages/TafeSandune';
import Tsvr from './pages/Tsvr';
import Training from './pages/Training';

import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/monotech" replace />} />
            <Route path="/geapi" element={<Geapi />} />
            <Route path="/holobox" element={<Holobox />} />
            <Route path="/monotech" element={<Monotech />} />
            <Route path="/nbg" element={<Nbg />} />
            <Route path="/piindustries" element={<Piindustries />} />
            <Route path="/tafear" element={<Tafear />} />
            <Route path="/tafesandune" element={<TafeSandune />} />
            <Route path="/tsvr" element={<Tsvr />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
