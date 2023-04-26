import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Events from './pages/Events';
import Scholarships from './pages/Scholarships';
import Research from './pages/Research';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="events" element={<Events />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="research" element={<Research />} />
      </Routes>
    </div>
  );
}
