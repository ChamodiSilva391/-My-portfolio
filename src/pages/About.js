import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <span className="section-tag">About Me</span>
        </div>

        {/* BIO & ASPIRATION */}
        <div className="about-bio__grid">
          <div className="about-bio__text">
            <h2 className="section-title about-bio__name">Chamodi Madhushani</h2>
            <p>
              IT undergraduate at the Institute of Technology, University of Moratuwa, specializing in Software Engineering and Mobile Application Development. Hands-on experience developing mobile healthcare applications with Flutter and Firebase, as well as intuitive web platforms using React.
            </p>
            <p style={{ marginTop: 14 }}>
              A fast learner and collaborative problem-solver eager to contribute academic rigor and practical development skills to high-impact engineering teams.
            </p>

            <div className="about-bio__info" role="list" aria-label="Personal information">
              {[
                { label: 'Location', value: 'Horampalla, Gampaha, Sri Lanka' },
                { label: 'Email', value: 'chamodimadhushani18@gmail.com' },
                { label: 'Phone', value: '+94 77 468 2495' },
                { label: 'Status', value: 'Open to Software Engineering & Mobile Dev Internships' },
              ].map(item => (
                <div className="about-bio__info-item" key={item.label} role="listitem">
                  <span className="about-bio__info-label">{item.label}</span>
                  <span className="about-bio__info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career aspiration */}
          <aside className="about-aspiration" aria-label="Career aspiration">
            <div className="aspiration-card">
              <div className="aspiration-card__icon" aria-hidden="true">🎯</div>
              <h3>Career Aspiration</h3>
              <p>
                To join a forward-thinking tech company as a <strong>Software Engineer Intern</strong> or <strong>Mobile Application Developer</strong> where I can actively contribute to innovative software ecosystems, learn modern enterprise practices, and build scalable, user-centered digital products.
              </p>
              <div className="aspiration-card__tags">
                <span className="aspiration-card__tag">Software Engineering</span>
                <span className="aspiration-card__tag">Mobile Development</span>
                <span className="aspiration-card__tag">Full-Stack Web</span>
              </div>
            </div>    
          </aside>
        </div>
      </div>
    </div>
  );
}
