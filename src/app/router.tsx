import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import WorkExperience from '../pages/WorkExperience';
import Projects from '../pages/Projects';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work-experience" element={<WorkExperience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default RouterConfig;