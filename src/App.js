import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link" style={{
        position: 'absolute', top: '-40px', left: 0,
        background: '#7c5cfc', color: '#fff', padding: '8px 16px',
        zIndex: 10000, transition: 'top 0.3s',
        borderRadius: '0 0 8px 0'
      }}
      onFocus={e => e.target.style.top = '0'}
      onBlur={e => e.target.style.top = '-40px'}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
