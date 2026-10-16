import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../constants/portfolioData';

export function ContactModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedFallback, setCopiedFallback] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setLoading(true);

    const emailSubject = `[Portfolio Inquiry] Message from ${formData.name.trim()}`;
    const emailBody = `Hi Althea,\n\n${formData.message.trim()}\n\n━━━━━━━━━━━━━━━━━━━━━━━\nSender Details:\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;
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
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch (err) {
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    const fullText = `To: ${CONTACT_INFO.email}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedFallback(true);
    setTimeout(() => setCopiedFallback(false), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Contact Modal">
          <X size={20} />
        </button>

        <h3 className="contact-modal-title">Start a Project Together</h3>
        <p className="contact-modal-sub">
          Send a direct inquiry or email <span className="text-red-highlight">{CONTACT_INFO.email}</span>
        </p>

        {submitted ? (
          <div className="contact-success-box animate-fadeIn">
            <CheckCircle2 size={44} className="text-emerald-600 mb-2" />
            <h4 className="font-serif text-xl font-bold text-burgundy">Message Sent Directly!</h4>
            <p className="text-sm text-muted my-2">
              Your message was sent directly to <span className="font-mono text-burgundy font-semibold">{CONTACT_INFO.email}</span>. Althea will be notified immediately.
            </p>
            <div className="flex gap-2 justify-center mt-3">
              <button 
                type="button" 
                onClick={handleCopy}
                className="modal-btn-secondary"
              >
                {copiedFallback ? (
                  <>
                    <Check size={14} className="text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
              <button 
                type="button" 
                onClick={onClose}
                className="modal-btn-primary"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                required 
                placeholder="Alex Morgan" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input 
                type="email" 
                required 
                placeholder="alex@company.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>Project Details / Message</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Tell me about your project or internship opportunity..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={loading}
              />
            </div>

            <button type="submit" className="contact-submit-btn" disabled={loading}>
              <span>{loading ? 'Sending to Inbox...' : 'Send Message'}</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
