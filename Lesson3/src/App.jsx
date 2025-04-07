import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Section from './components/Section/Section.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.scss';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar onToggle={toggleDarkMode} /> 
      <Section />
      <Footer />
    </div>
  );
}

export default App;