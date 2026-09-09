import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/ui/Preloader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import LearnASport from './pages/LearnASport';
import Private from './pages/learn-a-sport/Private';
import Schools from './pages/learn-a-sport/Schools';
import Centres from './pages/learn-a-sport/Centres';
import Sports from './pages/Sports';
import SportDetail from './pages/SportDetail';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

const AppRoutes = ({ isLoaded }) => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isLoaded={isLoaded} />} />
        
        <Route path="/learn-a-sport" element={<LearnASport />} />
        <Route path="/learn-a-sport/private" element={<Private />} />
        <Route path="/learn-a-sport/schools" element={<Schools />} />
        <Route path="/learn-a-sport/centres" element={<Centres />} />
        
        <Route path="/sports" element={<Sports />} />
        <Route path="/sports/:id" element={<SportDetail />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // Use a ref or local storage to only show preloader once per session if desired.
  // For now, we'll just show it once on mount.

  return (
    <Router>
      {showPreloader && <Preloader onComplete={() => { setIsLoaded(true); setShowPreloader(false); }} />}
      <AppRoutes isLoaded={isLoaded || !showPreloader} />
    </Router>
  );
}

export default App;
