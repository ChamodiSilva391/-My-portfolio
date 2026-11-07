import React from 'react';
import './Certificates.css';

const certificatesData = [
  {
    period: "COMPLETED",
    degree: "Diploma in Information Technology & English",
    institution: "Esoft Metro Campus",
  },
  {
    period: "CERTIFICATION",
    degree: "Introduction to Data Science",
    institution: "CISCO Networking Academy",
  },
  {
    period: "CERTIFICATION",
    degree: "Certificate Course in Python for Beginners",
    institution: "CODL, University of Moratuwa",
  },
  {
    period: "CERTIFICATION",
    degree: "Certificate Course in Web Design for Beginners",
    institution: "CODL, University of Moratuwa",
  }
];

export default function Certificates() {
  return (
    <div className="certificates-section">
      <div className="container">
        <div className="certificates-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Professional qualifications and certified coursework.
          </p>
        </div>

        <div className="education-timeline">
          {certificatesData.map((ed, i) => (
            <article className="education-item" key={i} aria-label={ed.degree}>
              <div className="education-item__dot" aria-hidden="true" />
              <div className="education-item__content">
                <div className="education-item__period">{ed.period}</div>
                <h3>{ed.degree}</h3>
                <p className="education-item__institution">{ed.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
