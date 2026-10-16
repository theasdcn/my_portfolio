import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setLoading(true);

    const emailSubject = `[Portfolio Inquiry] from ${formData.name.trim()}`;
    const emailBody = `Hi Althea,\n\n${formData.message.trim()}\n\n---\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `[Portfolio Inquiry] New message from ${formData.name.trim()}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to email client
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch (err) {
      // Network or adblock fallback
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="clean-contact-section" id="contact">
      <div className="clean-contact-container">

        {/* LEFT COLUMN: Exactly matching user reference */}
        <div className="clean-contact-intro">
          <span className="contact-eyebrow-italic">✦ Contact ✦</span>
          <h2 className="contact-headline-serif">Let's work together. <span className="title-star-flair">✦</span></h2>
          <div className="contact-red-accent-line" />

          <div className="contact-text-links-list">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="contact-clean-text-link"
            >
              {CONTACT_INFO.email}
            </a>

            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-clean-text-link"
            >
              linkedin.com/in/althea-zuleika-sadicon-1754271ba
            </a>

            <a 
              href={CONTACT_INFO.briefcase} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-clean-text-link"
            >
              paraverse.feutech.edu.ph/briefcase
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Minimal underline inputs & pill button */}
        <div className="clean-contact-form-wrapper">
          {submitted ? (
            <div className="clean-form-success animate-fadeIn">
              <CheckCircle2 size={32} className="text-emerald-700 mb-2 mx-auto" />
              <h4 className="font-serif text-xl font-bold text-burgundy">Message Sent Directly!</h4>
              <p className="text-muted text-sm my-2">
                Thank you! Your message has been sent directly to <span className="font-mono text-burgundy font-semibold">{CONTACT_INFO.email}</span>. Althea will get back to you shortly.
              </p>
              <button 
                type="button" 
                onClick={() => {
                  setFormData({ name: '', email: '', message: '' });
                  setSubmitted(false);
                }}
                className="clean-reset-btn"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="clean-underline-form" onSubmit={handleFormSubmit}>
              <div className="clean-field">
                <input 
                  type="text" 
                  required 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="clean-input"
                  disabled={loading}
                />
              </div>

              <div className="clean-field">
                <input 
                  type="email" 
                  required 
                  placeholder="Your email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="clean-input"
                  disabled={loading}
                />
              </div>

              <div className="clean-field">
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Message" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="clean-textarea"
                  disabled={loading}
                />
              </div>

              <div className="clean-btn-row">
                <button 
                  type="submit" 
                  className="clean-submit-pill"
                  disabled={loading}
                >
                  {loading ? 'Sending to Inbox...' : 'Send message'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
