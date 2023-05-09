import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Events from './pages/Events';
import Research from './pages/Research';
import CreateEvent from './pages/Create-Event';
import UpdateEvent from './pages/Update-Event';
import Scholarships from './pages/Scholarships';
import CreateScholarship from './pages/Create-Scholarship';
import UpdateScholarship from './pages/Update-Scholarship';
import CreateResearch from './pages/Create-Research';
import UpdateResearch from './pages/Update-Research';
import Liasons from './pages/Liasons';
import CreateLiason from './pages/Create-Liason';
import UpdateLiason from './pages/Update-Liason';
import ViewEvent from './pages/View-Event';
import ViewScholarship from './pages/View-Scholarship';
import ViewResearch from './pages/View_Research';

export default function App() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="events" element={<Events />} />
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="update-event/:id" element={<UpdateEvent />} />
        <Route path="view-event/:id" element={<ViewEvent />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="create-scholarship" element={<CreateScholarship />} />
        <Route path="update-scholarship/:id" element={<UpdateScholarship />} />
        <Route path="view-scholarship/:id" element={<ViewScholarship />} />
        <Route path="research" element={<Research />} />
        <Route path="create-research" element={<CreateResearch />} />
        <Route path="update-research/:id" element={<UpdateResearch />} />
        <Route path="view-research/:id" element={<ViewResearch />} />
        <Route path="liasons" element={<Liasons />} />
        <Route path="create-liason" element={<CreateLiason />} />
        <Route path="update-liason/:id" element={<UpdateLiason />} />
      </Routes>
    </div>
  );
}
