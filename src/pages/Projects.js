import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'SentinelCare – Smart Medical Hand Band (Elderly Health Monitoring System)',
    category: 'IoT & Mobile',
    badge: 'Final Year Group Project',
    desc: 'A smart wearable system designed to monitor elderly users’ health metrics and daily activities in real time with automated emergency response.',
    highlights: [
      'Developed a smart wearable system to monitor elderly users’ health and daily activities in real time.',
      'Integrated heart rate, SpO₂, body temperature, motion, and pressure sensors for continuous health and fall detection.',
      'Developed a Flutter mobile application for caregivers and a web dashboard for viewing health reports and alerts.',
      'Implemented medicine reminders, emergency alerts, and real-time data synchronization using Firebase.'
    ],
    tech: ['Flutter', 'Firebase', 'IoT Sensors', 'Machine Learning', 'BLE', 'Web Dashboard'],
    github: 'https://github.com/NisalAluthge/SentinelCare.git',
    image: '/image/sentinelcare.png',
    color: '#2563eb',
  },
  {
    id: 2,
    title: 'University Student Event Management System',
    category: 'Web App & UI/UX',
    badge: 'Individual Project',
    desc: 'A modern web-based platform for organizing, discovering, and registering for university events with a clean and accessible user experience.',
    highlights: [
      'Designed and developed a web-based platform for managing and discovering university events.',
      'Created user-friendly interfaces for event browsing, registration, and event information management.',
      'Applied UI/UX principles to significantly improve usability, responsive layouts, and accessibility.'
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI', 'UI/UX Design'],
    github: 'https://github.com/ChamodiSilva391/Student_Event_Management_System.git',
    image: '/image/event-management.png',
    color: '#38bdf8',
  },
  {
    id: 3,
    title: 'CareerTrack – Job Application Tracker',
    category: 'Full-Stack Web',
    badge: 'Individual Project',
    desc: 'A full-stack productivity web application designed to help job and internship seekers monitor, organize, and manage their recruitment pipeline.',
    highlights: [
      'Designed and developed a web-based application to manage and track job and internship applications.',
      'Implemented full CRUD features to add, update, delete, and monitor application statuses (including interviews and offers).',
      'Integrated Firebase Authentication and Cloud Firestore to manage user accounts and store application data securely.'
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'Firebase Auth', 'Cloud Firestore'],
    github: 'https://github.com/ChamodiSilva391/careertrack-system.git',
    image: '/image/careertrack.png',
    color: '#60a5fa',
  },
  {
    id: 4,
    title: 'Interactive Web Calculator',
    category: 'Frontend & Web',
    badge: 'Individual Project',
    desc: 'A responsive and intuitive web-based calculator application built with core web technologies for everyday arithmetic computations.',
    highlights: [
      'Designed a clean, modern, and responsive user interface for seamless calculations on both desktop and mobile.',
      'Implemented event-driven JavaScript logic for standard arithmetic operations, decimal precision, and reset functions.',
      'Structured with clean semantic HTML5 and styled with modern CSS layout techniques.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Responsive Web'],
    github: 'https://github.com/ChamodiSilva391/calculator-app.git',
    image: '/image/calculator.jpg',
    color: '#0ea5e9',
  },
];

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects That Showcase My Skills</h2>
          <p className="section-subtitle">
            A collection of real-world projects featuring mobile apps, IoT systems, and modern full-stack web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map(project => (
            <article
              className="project-card"
              key={project.id}
              aria-label={`Project: ${project.title}`}
              style={{ '--project-color': project.color }}
            >
              <div className="project-card__image" aria-label={`${project.title} screenshot`}>
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`} 
                  className="project-card__src-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                <div className="project-card__overlay">
                  <a
                    href={project.github}
                    className="btn-outline"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View Code
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__category">{project.category}</span>
                  {project.badge && <span className="project-card__badge">{project.badge}</span>}
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>

                {project.highlights && (
                  <ul className="project-card__bullets">
                    {project.highlights.map((bullet, i) => (
                      <li key={i} className="project-card__bullet">
                        <span className="project-card__bullet-dot" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-card__tech" aria-label="Technologies used">
                  {project.tech.map(t => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={project.github}
                    className="project-card__link project-card__link--accent"
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
    </div>
  );
}
