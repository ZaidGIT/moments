import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import TimelineLayout from './TimelineLayout.js';
import Timeline from './components/Timeline.jsx';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<TimelineLayout />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
