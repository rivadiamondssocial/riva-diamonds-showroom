import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Customization',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission success
    setSubmitted(true);
    setTimeout(() => {
      // Open WhatsApp with form details for quick inquiries!
      const phoneNumber = "917600044200";
      const waMsg = `Hello Riva Diamonds, I would like to inquire about your designs.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.service}
Message: ${formData.message}`;
      const encodedMsg = encodeURIComponent(waMsg);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Bespoke Customization',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section dark-section">
      <div className="container contact-container">
        <div className="contact-grid">
          
          {/* Info Details column */}
          <div className="contact-info-panel">
            <span className="contact-subtitle">Riva Diamonds Pvt Ltd</span>
            <h2 className="contact-title">Visit Our Atelier</h2>
            <p className="contact-lead-text">
              Intrigued by our collections? Book a private styling session at our Ahmedabad salon to experience the physical weight, shine, and craftsmanship of Riva designs in person.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <MapPin size={22} className="contact-icon" />
                <div className="item-details">
                  <h3>Address</h3>
                  <p>
                    Riva Diamond Private Limited,<br />
                    5, 6, Kamal Complex, Near Sardar Stadium Circle,<br />
                    C G Road, Navrangpura, Ahmedabad - 380009,<br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <Phone size={20} className="contact-icon" />
                <div className="item-details">
                  <h3>Call or WhatsApp</h3>
                  <p><a href="tel:+917600044200" className="contact-link-hover">+91 76000 44200</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <Mail size={20} className="contact-icon" />
                <div className="item-details">
                  <h3>Email</h3>
                  <p><a href="mailto:rivadiamondsltd@gmail.com" className="contact-link-hover">rivadiamondsltd@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <Clock size={20} className="contact-icon" />
                <div className="item-details">
                  <h3>Atelier Hours</h3>
                  <p>Mon - Sat: 11:00 AM - 8:00 PM (By Appointment Only)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-panel">
            <div className="form-frame">
              <h3 className="form-title">Send An Inquiry</h3>
              <p className="form-subtitle">Share your desires, and our specialists will contact you.</p>

              {submitted ? (
                <div className="form-success-state">
                  <div className="success-check-circle">✓</div>
                  <h4>Connecting to WhatsApp...</h4>
                  <p>We are launching WhatsApp with your inquiry. Thank you for connecting with Riva Diamonds.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="luxury-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. Aishwarya Patel"
                      required 
                    />
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="e.g. +91 98765 43210"
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="e.g. mail@example.com"
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Desired Inquiry Service</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                    >
                      <option>Bespoke Customization</option>
                      <option>Private Showroom Viewing</option>
                      <option>Whispers from the Valley Collection</option>
                      <option>General Brand Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows="4" 
                      placeholder="Tell us about the design you wish to acquire..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-luxury ochre btn-submit-luxury">
                    <span>Submit & Open WhatsApp</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
