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
    value: 'chamodimadhushani18@email.com',
    href: 'mailto:chamodimadhushani18@email.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Gampaha, Sri Lanka',
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
    // Clear error on change
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
    // Simulate send 
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-hero__blob" aria-hidden="true" />
        <div className="container">
          <span className="section-tag">Contact</span>
          <h1 id="contact-heading" className="section-title">Let's work together</h1>
          <p className="section-subtitle">
            Open to internship opportunities and collaborations. I'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-main" aria-label="Contact information and form">
        <div className="container contact-main__grid">

          {/* Info column */}
          <div className="contact-info">
            <h2 className="contact-info__heading">Get in touch</h2>
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
              <span>Available for internships starting 2026</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="contact-success" role="alert" aria-live="polite">
                <div className="contact-success__icon" aria-hidden="true">✅</div>
                <h3>Message sent!</h3>
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
      </section>
    </div>
  );
}
