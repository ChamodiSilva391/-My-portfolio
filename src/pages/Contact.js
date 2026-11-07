import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'chamodimadhushani18@gmail.com',
    href: 'mailto:chamodimadhushani18@gmail.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+94 77 468 2495',
    href: 'tel:+94774682495',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Horampalla, Gampaha, Sri Lanka',
    href: null,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/ChamodiSilva391',
    href: 'https://github.com/ChamodiSilva391',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/chamodi-madhushani',
    href: 'https://www.linkedin.com/in/chamodi-madhushani-a080b2360',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Connect &amp; Work Together</h2>
          <p className="section-subtitle">
            Open to software engineering and mobile development internship opportunities and collaborations.
          </p>
        </div>

        <div className="contact-main__grid">
          {/* Info column */}
          <div className="contact-info">
            <h3 className="contact-info__heading">Direct Contact</h3>
            <p className="contact-info__text">
              Whether you have an internship opportunity, a project idea, or just want to say hello —
              my inbox is always open.
            </p>

            <div className="contact-info__items" role="list">
              {contactInfo.map(item => (
                <div className="contact-info__item" key={item.label} role="listitem">
                  <div className="contact-info__icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact-info__label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info__value contact-info__value--link" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-info__value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <div className="contact-availability__dot" aria-hidden="true" />
              <span>Open to Software Engineering &amp; Mobile Dev Internships</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="contact-success" role="alert" aria-live="polite">
                <div className="contact-success__icon" aria-hidden="true">✅</div>
                <h3>Message sent successfully!</h3>
                <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span aria-label="required">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-input${errors.name ? ' form-input--error' : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span aria-label="required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input${errors.email ? ' form-input--error' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input form-textarea${errors.message ? ' form-input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary contact-form__submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
