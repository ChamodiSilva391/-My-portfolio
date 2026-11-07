import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scrollspy
      const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`navbar__link${activeSection === link.id ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a 
          href={`${process.env.PUBLIC_URL || ''}/resume.pdf`} 
          download="Chamodi_Madhushani_Resume.pdf" 
          className="btn-outline navbar__cta"
          style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          title="Download CV / Resume"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          CV
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(link => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollTo(link.id)}
            className={`navbar__mobile-link${activeSection === link.id ? ' active' : ''}`}
          >
            {link.label}
          </button>
        ))}
        <a 
          href={`${process.env.PUBLIC_URL || ''}/resume.pdf`} 
          download="Chamodi_Madhushani_Resume.pdf" 
          className="btn-outline" 
          style={{ marginTop: 12, width: 'fit-content', padding: '10px 20px', fontSize: '0.9rem' }}
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
