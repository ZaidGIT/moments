// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import TimelineLayout from './TimelineLayout.js';

import Home from './components/Home';
import Timeline from './components/Timeline.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<TimelineLayout />}/>
      </Routes>
    </Router>
  )
}

export default App;
