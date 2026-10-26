import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-luxury">
      <div className="container footer-container">
        
        <div className="footer-top">
          <div className="footer-brand-col">
            <img src="/logo.png" alt="Riva Diamonds Logo" className="footer-logo" />
            <p className="footer-tagline">
              Sculpting nature's elegance into timeless jewelry. An artistic partnership highlighting the collections of Pooja Soni.
            </p>
          </div>

          <div className="footer-links-col">
            <h3>Explore</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#designer">The Designer</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#contact">Contact Atelier</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h3>Contact Atelier</h3>
            <p className="footer-address">
              Riva Diamond Private Limited.<br />
              5, 6, Kamal Complex, Near Sardar Stadium Circle,<br />
              C G Road, Navrangpura, Ahmedabad - 380009,<br />
              Gujarat, India
            </p>
            <p className="footer-phone">
              <strong>Phone:</strong> <a href="tel:+917600044200">+91 76000 44200</a>
            </p>
            <p className="footer-email">
              <strong>Email:</strong> <a href="mailto:rivadiamondsltd@gmail.com">rivadiamondsltd@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Riva Diamonds Pvt Ltd. All Rights Reserved.</p>
          <p className="designer-attribution">Designer Signature Collection: Pooja Soni</p>
        </div>

      </div>
    </footer>
  );
}
