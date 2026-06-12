import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/profile.jpeg';

export default function Home() {
  return (
    <div className="home">
      {/* HERO*/}
      <section className="hero" aria-labelledby="hero-heading">
        {/* Background decorative blobs */}
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__content">
            

            <h1 id="hero-heading" className="hero__title fade-up-delay-1">
              Hi, I'm <span className="hero__name">M.A.C.M.Silva</span>
              <br />
              <span className="hero__subtitle-text">Software Engineer</span>
            </h1>

            <p className="hero__desc fade-up-delay-2">
             I'm an IT undergraduate at the Institute of Technology, University of Moratuwa, passionate about software development, web technologies, and UI/UX design. I enjoy creating functional, user-friendly digital solutions and continuously learning new technologies to solve real-world problems.
    
            </p>

            <div className="hero__cta-group fade-up-delay-3">
              <Link to="/projects" className="btn-primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">Get in Touch</Link>
            </div>

      
          </div>

          {/*  Visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__avatar-ring">
              <div className="hero__avatar">
                <img src={profileImg} alt="Profile" className="hero__profile-pic" />
              </div>
            </div>          
          </div>
            
        </div>
      </section>

      {/* SKILLS STRIP */}
      <section className="skills-strip" aria-labelledby="skills-heading">
        <div className="container">
          <h2 id="skills-heading" className="sr-only">Technologies I Use</h2>
          <div className="skills-strip__inner">
            {['React', 'JavaScript', 'Node.js' , 'MySQL', 'HTML', 'CSS', 'Git', 'Figma'].map(skill => (
              <div className="skills-strip__item" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/*  HIGHLIGHT CARDS  */}
      <section className="highlights" aria-labelledby="highlights-heading">
        <div className="container">
          <div className="highlights__header">
            <span className="section-tag">What I Do</span>
            <h2 id="highlights-heading" className="section-title">Building with purpose</h2>
            <p className="section-subtitle">
              Combining robust backend logic with clean, user-centered frontend solutions to build high-performance software.
            </p>
          </div>

          <div className="highlights__grid">
            {[
  {
    
    title: 'Full-Stack Development',
    desc: 'Designing and building robust web applications using frontend frameworks like React and powerful backend solutions.',
  },
  {
    
    title: 'Backend & API Architecture',
    desc: 'Developing scalable, secure server-side logic and RESTful APIs with Java, Spring Boot, and managing transactional relational databases.',
  },
 {
    
    title: 'Project Management',
    desc: 'Managing software development workflows efficiently using Agile methodologies, tracking tasks via Jira, and collaborating seamlessly through Git & GitHub workflows.',
   
 }
].map(card => (
  <article className="highlight-card" key={card.title}>
    <div className="highlight-card__icon" aria-hidden="true">{card.icon}</div>
    <h3>{card.title}</h3>
    <p>{card.desc}</p>
  </article>
))}
          </div>
        </div>
      </section>
    </div>
  );
}
