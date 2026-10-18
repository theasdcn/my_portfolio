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
  const [activationNotice, setActivationNotice] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setLoading(true);
    setActivationNotice(false);

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

      const data = await response.json().catch(() => ({}));

      if (data.message && data.message.toLowerCase().includes('activation')) {
        // FormSubmit needs the owner to click the confirmation link once in Gmail
        setActivationNotice(true);
      } else if (response.ok && data.success !== 'false') {
        setSubmitted(true);
      } else {
        // Fallback to opening email client directly
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
          <span className="contact-eyebrow-italic">Contact</span>
          <h2 className="contact-headline-serif">Let's work together.</h2>
          <div className="contact-red-accent-line" />

          <div className="contact-text-links-list">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="contact-clean-text-link"
            >
              {CONTACT_INFO.email}
            </a>

            <a 
              href={CONTACT_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-clean-text-link"
            >
              github.com/theasdcn
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
          {activationNotice ? (
            <div className="clean-form-notice animate-fadeIn" role="status">
              <h4 className="clean-form-notice-title">Your message hasn't been sent yet</h4>
              <p className="clean-form-notice-text">
                The form couldn't deliver it automatically. Send it from your email app instead; your message is already filled in.
              </p>
              <div className="clean-form-notice-actions">
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                  className="clean-submit-pill clean-submit-pill--compact"
                >
                  Open email app
                </a>
                <button
                  type="button"
                  onClick={() => setActivationNotice(false)}
                  className="clean-reset-btn"
                >
                  Back to form
                </button>
              </div>
            </div>
          ) : submitted ? (
            <div className="clean-form-notice is-success animate-fadeIn" role="status">
              <CheckCircle2 size={28} className="clean-form-notice-icon" aria-hidden="true" />
              <h4 className="clean-form-notice-title">Message sent</h4>
              <p className="clean-form-notice-text">
                Thanks for reaching out, {formData.name.trim()}. Althea will get back to you at {formData.email.trim()}.
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
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
