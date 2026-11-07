import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import './index.css';

function App() {
  useEffect(() => {
    // Handle initial hash in URL if present (e.g., #projects, #about)
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '').replace('/', '');
      if (id) {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, []);

  return (
    <>
      <a 
        href="#home" 
        className="skip-link" 
        style={{
          position: 'absolute', 
          top: '-40px', 
          left: 0,
          background: 'var(--accent)', 
          color: '#ffffff', 
          fontWeight: 600, 
          padding: '8px 16px',
          zIndex: 10000, 
          transition: 'top 0.3s',
          borderRadius: '0 0 8px 0'
        }}
        onFocus={e => e.target.style.top = '0'}
        onBlur={e => e.target.style.top = '-40px'}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
