import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImg from '../assets/profile.png';

const roles = [
  'Software Engineer',
  'Mobile Application Developer'
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === current) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 35 : 85;
      timer = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        {/* Background decorative blobs */}
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__title fade-up">
              <span className="hero__greeting">Hi, I'm</span>
              <br />
              <span className="hero__name">Chamodi Madhushani</span>
              <br />
              <span className="hero__subtitle-wrapper">
                <span className="hero__subtitle-text">{displayText}</span>
                <span className="hero__cursor" aria-hidden="true">|</span>
              </span>
            </h1>

            <div className="hero__cta-group fade-up-delay-1">
              <button 
                type="button" 
                onClick={() => scrollTo('projects')} 
                className="btn-primary"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a 
                href="/resume.pdf" 
                download="Chamodi_Madhushani_Resume.pdf" 
                className="btn-outline"
                title="Download CV / Resume"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <button 
                type="button" 
                onClick={() => scrollTo('contact')} 
                className="btn-outline"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__avatar-ring">
              <div className="hero__avatar">
                <img src={profileImg} alt="Chamodi Madhushani" className="hero__profile-pic" />
              </div>
            </div>          
          </div>
        </div>
      </section>
    </div>
  );
}
