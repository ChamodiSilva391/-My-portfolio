import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Employee Management System',
    category: 'Full-Stack',
    desc: 'A robust enterprise backend solution designed for managing workforce data efficiently. Features secure structural handling for employee metrics, address structures, and banking entities.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Postman'],
    github: 'https://github.com/ChamodiSilva3ru91',
    image: '/image/EMS.webp',
    color: '#7c5cfc',
  },
  {
    id: 2,
    title: 'ERP Admin Module',
    category: 'Backend & Enterprise',
    desc: 'A centralized administrative dashboard developed for enterprise resource planning. Features role-based user management, system configuration controls, and secure privilege provisioning.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST API'],
    github: 'https://github.com/ChamodiSilva391',
    image: '/image/ADMIN.png',
    color: '#c084fc', 
  },
  {
    id: 3,
    title: 'Hospital Appointment System',
    category: 'Full-Stack',
    desc: 'A collaborative full-stack web application designed to streamline patient scheduling, doctor assignments, and real-time medical appointment workflows seamlessly.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'CSS3'],
    github: 'https://github.com/ChamodiSilva391',
    image: '/image/HMS.webp',
    color: '#34d399',
  },
  {
    id: 4,
    title: 'Library Management System',
    category: 'Full-Stack / Backend',
    desc: 'An automated system designed to streamline library operations, including book cataloging, member registration, fine calculations, and secure book borrowing/returning workflows.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'REST API'],
    github: 'https://github.com/ChamodiSilva391',
    image: '/image/LMS.png',
    color: '#f43f5e', 
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero" aria-labelledby="projects-heading">
        <div className="projects-hero__blob" aria-hidden="true" />
        <div className="container">
          <span className="section-tag">My Work</span>
          <h1 id="projects-heading" className="section-title">Projects that showcase my skills</h1>
          <p className="section-subtitle">
            Each project is built with clean code and structured architecture—bringing scalability, efficiency, and purpose to real-world applications.
          </p>
        </div>
      </section>

      <section className="projects-list" aria-labelledby="projects-list-heading">
        <div className="container">
          <h2 id="projects-list-heading" className="sr-only">Project List</h2>

          <div className="projects-grid">
            {projects.map(project => (
              <article
                className="project-card"
                key={project.id}
                aria-label={`Project: ${project.title}`}
                style={{ '--project-color': project.color }}
              >
                
                <div className="project-card__image" aria-label={`${project.title} screenshot`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`} 
                      className="project-card__src-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="project-card__placeholder" aria-hidden="true">
                      <span style={{ color: project.color, fontSize: '3rem' }}>{'</>'}</span>
                    </div>
                  )}

                  <div className="project-card__overlay">
                    <a
                      href={project.github}
                      className="btn-outline"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__category">{project.category}</span>
                  </div>

                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.desc}</p>

                  <div className="project-card__tech" aria-label="Technologies used">
                    {project.tech.map(t => (
                      <span key={t} className="project-card__tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <a
                      href={project.github}
                      className="project-card__link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}