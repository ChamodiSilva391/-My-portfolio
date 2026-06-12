import React from 'react';
import './About.css';

// Education data
const educationData = [
  {
    period: "2024 - PRESENT",
    degree: "National Diploma in Technology",
    institution: "Institute of Technology, University of Moratuwa",
    desc: "Specializing in Information Systems. Core modules include Object-Oriented Programming (Java), Database Management Systems (MySQL), Data Structures & Algorithms, and Web Application Development."
  },
  {
    period: "2021 - 2023",
    degree: "G.C.E. Advanced Level",
    institution: "President's College, Minuwangoda",
    desc: "Main subjects studied: Combined Mathematics, Physics, and Chemistry. Developed strong logical reasoning and analytical problem-solving skills that laid the foundation for my software engineering journey."
  }
];

const skills = [
  { category: 'Frontend', items: ['React.js', 'JavaScript ', 'HTML', 'CSS'] },
  { category: 'Backend', items: ['Node.js', 'Spring Boot', 'PHP', 'Go'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'Firebase'] },
  { category: 'Tools & Other', items: ['Git & GitHub', 'Figma', 'VS Code', 'Postman'] },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-hero__blob" aria-hidden="true" />
        <div className="container">
          <span className="section-tag">About Me</span>
          <h1 id="about-heading" className="section-title fade-up">
            Driven by Logic, Focused on Scalability
          </h1>
          <p className="section-subtitle fade-up-delay-1">
            I'm an IT undergraduate who believes that great software is built on a foundation of clean code, efficient database design, and seamless user experiences.
          </p>
        </div>
      </section>

      {/*BIO */}
      <section className="about-bio" aria-labelledby="bio-heading">
        <div className="container about-bio__grid">
          <div className="about-bio__text">
            <span className="section-tag">Who I Am</span>
            <h2 id="bio-heading" className="section-title">M.A.C.M.Silva</h2>
            <p>
              I'm a Semester III student at the Institute of Technology, University of Moratuwa,
              pursuing the National Diploma in Technology with a focus on Information Systems.
              My passion lies in constructing end-to-end applications that bridge the gap between high-performance backends and interactive frontends.
            </p>
            <p style={{ marginTop: 16 }}>
              My journey into software engineering has equipped me with hands-on experience in object-oriented programming with Java, enterprise backend architecture using Spring Boot, and relational database management via MySQL. I also enjoy translating design concepts into functional interfaces using React.js. Beyond standard application development, I actively challenge myself by diving into Data Science and machine learning, continuously discovering new data insights to solve real-world system complexities.
            </p>

            <div className="about-bio__info" role="list" aria-label="Personal information">
              {[
                { label: 'Location', value: 'Gampaha, Sri Lanka' },
                { label: 'Email', value: 'chamodimadhushani18@email.com' },
                { label: 'Status', value: 'Open to Internships' },
              ].map(item => (
                <div className="about-bio__info-item" key={item.label} role="listitem">
                  <span className="about-bio__info-label">{item.label}</span>
                  <span className="about-bio__info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career aspiration  */}
          <aside className="about-aspiration" aria-label="Career aspiration">
            <div className="aspiration-card">
              <div className="aspiration-card__icon" aria-hidden="true"></div>
              <h3>Career Aspiration</h3>
              <p>
                To join a forward-thinking tech company as a <strong>Junior Software Engineer</strong> or <strong>Intern</strong> where I can actively contribute to backend and full-stack ecosystems, sharpen my problem-solving skills, and build impactful, production-grade applications.
              </p>
            </div>    
          </aside>
        </div>
      </section>

      {/* SKILLS*/}
      <section className="about-skills" aria-labelledby="skills-heading">
        <div className="container">
          <span className="section-tag">Technical Skills</span>
          <h2 id="skills-heading" className="section-title">What I Work With</h2>
          <div className="skills-grid">
            {skills.map(group => (
              <div className="skill-group" key={group.category}>
                <h3 className="skill-group__category">{group.category}</h3>
                <ul className="skill-group__list" aria-label={`${group.category} skills`}>
                  {group.items.map(item => (
                    <li key={item} className="skill-group__item">
                      <span className="skill-group__dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*EDUCATION*/}
      <section className="about-education" aria-labelledby="education-heading">
        <div className="container">
          <span className="section-tag">Education</span>
          <h2 id="education-heading" className="section-title">Academic Background</h2>
          <div className="education-timeline">
           
            {educationData.map((ed, i) => (
              <article className="education-item" key={i} aria-label={ed.degree}>
                <div className="education-item__dot" aria-hidden="true" />
                <div className="education-item__content">
                  <div className="education-item__period">{ed.period}</div>
                  <h3>{ed.degree}</h3>
                  <p className="education-item__institution">{ed.institution}</p>
                  <p className="education-item__desc">{ed.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}