import React, { useState } from 'react';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';

// Create DarkModeContext
export const DarkModeContext = React.createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        <HelmetProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/photoGallery" element={<PhotoGallery />} />
            </Routes>
          </Router>
        </HelmetProvider>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;