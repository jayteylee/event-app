import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Upcoming from './pages/Upcoming';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
}
