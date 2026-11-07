import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    skills: ['Flutter', 'React.js', 'Dart', 'JavaScript', 'Python', 'Java', 'HTML & CSS', 'PHP']
  },
  {
    title: 'Databases & Backend',
    skills: ['MySQL', 'Firebase', 'REST APIs', 'Spring Boot']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Figma (UI/UX)']
  },
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Communication', 'Problem Solving', 'Time Management', 'Self-Learning']
  }
];

export default function Skills() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Technologies, tools, and competencies I use to build scalable web and mobile applications.
          </p>
        </div>

        {/* SKILLS CARDS */}
        <div className="skills-simple-grid">
          {skillGroups.map(group => (
            <div className="skill-simple-card" key={group.title}>
              <h3 className="skill-simple-card__title">{group.title}</h3>
              <div className="skill-simple-card__pills">
                {group.skills.map(skill => (
                  <span className="skill-simple-pill" key={skill}>
                    <span className="skill-simple-pill__dot" aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="skills-cta-simple">
          <div>
            <h3>Interested in seeing my work?</h3>
            <p>Explore real-world projects built with these technologies.</p>
          </div>
          <button 
            type="button" 
            onClick={() => scrollTo('projects')} 
            className="btn-primary"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
