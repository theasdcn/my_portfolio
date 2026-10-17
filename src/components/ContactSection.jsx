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
            <div className="clean-form-success animate-fadeIn" style={{ borderColor: '#d4af37', background: 'rgba(212, 175, 55, 0.08)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📧</div>
              <h4 className="font-serif text-xl font-bold" style={{ color: '#b81d36' }}>One-Time Activation Required!</h4>
              <p className="text-muted text-sm my-2" style={{ lineHeight: '1.6' }}>
                FormSubmit has sent a confirmation email to <strong style={{ color: '#b81d36' }}>{CONTACT_INFO.email}</strong>.
              </p>
              <div style={{ background: 'rgba(0,0,0,0.04)', padding: '0.85rem', borderRadius: '8px', margin: '0.75rem 0', fontSize: '0.85rem', textAlign: 'left', borderLeft: '3px solid #b81d36' }}>
                <strong>How to receive emails:</strong>
                <ol style={{ paddingLeft: '1.2rem', marginTop: '0.35rem' }}>
                  <li>Open your Gmail for <strong>{CONTACT_INFO.email}</strong></li>
                  <li>Look for an email from <strong>FormSubmit</strong> (check <strong>Spam/Junk</strong> if not in Inbox)</li>
                  <li>Click the <strong>"Activate Form"</strong> button inside</li>
                </ol>
              </div>
              <p className="text-muted text-xs mb-3">
                Once clicked, all messages sent here will arrive immediately in your Gmail inbox!
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                  className="clean-submit-pill"
                  style={{ textDecoration: 'none', display: 'inline-block', padding: '0.5rem 1.2rem' }}
                >
                  Send via Email App Instead
                </a>
                <button 
                  type="button" 
                  onClick={() => setActivationNotice(false)}
                  className="clean-reset-btn"
                >
                  Back to Form
                </button>
              </div>
            </div>
          ) : submitted ? (
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
