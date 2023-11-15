
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/photoGallery" element={<PhotoGallery />} />
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
