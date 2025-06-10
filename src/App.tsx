import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import YoutubeSection from './components/YoutubeSection';
import Gallery from './components/Gallery';
import DonatePage from './components/DonatePage';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Banner />
        <Services />
        <About />
        <YoutubeSection />
        <Gallery />
        <DonatePage />
        <MapSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;