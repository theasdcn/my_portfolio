import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants/portfolioData';

export function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <h3 className="contact-modal-title">Start a Project Together</h3>
        <p className="contact-modal-sub">
          Send a direct inquiry or email <span className="text-red-highlight">{CONTACT_INFO.email}</span>
        </p>

        {submitted ? (
          <div className="contact-success-box">
            <CheckCircle2 size={48} className="text-red-accent animate-bounce" />
            <h4>Message Sent Successfully!</h4>
            <p>Althea will respond to your email within 24 hours.</p>
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
              />
            </div>

            <div className="form-group">
              <label>Project Details</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Tell me about your project or internship opportunity..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
