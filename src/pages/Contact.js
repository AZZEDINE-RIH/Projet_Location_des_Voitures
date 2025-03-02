import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Handle form submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any question you might have</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>123 Car Street, City, Country</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <p>+1 234 567 890</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>contact@carrental.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <h3>Working Hours</h3>
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              value={formData.message}
              onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              rows="5"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${status}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 
             status === 'sent' ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="map-container">
        {/* Add your Google Maps integration here */}
        <div className="map-placeholder">
          Map will be displayed here
        </div>
      </div>
    </div>
  );
}

export default Contact; 