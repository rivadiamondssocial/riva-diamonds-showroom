import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar-luxury ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-top-bar">
          <div className="container top-bar-container">
            <div className="top-bar-contact">
              <a href="tel:+917600044200" className="contact-link">
                <Phone size={13} /> <span>+91 76000 44200</span>
              </a>
              <a href="mailto:rivadiamondsltd@gmail.com" className="contact-link">
                <Mail size={13} /> <span>rivadiamondsltd@gmail.com</span>
              </a>
            </div>
            <div className="top-bar-tagline">
              <span>High Jewelry Designs by Pooja Soni</span>
            </div>
          </div>
        </div>

        <div className="navbar-main">
          <div className="container main-nav-container">
            <div className="nav-logo">
              <a href="#home" className="logo-link">
                <img src="/logo.png" alt="Riva Diamonds Logo" className="logo-img" />
              </a>
            </div>

            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#designer">The Designer</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#contact">Inquire</a></li>
            </ul>

            <div className="nav-cta">
              <a href="#contact" className="btn-nav-inquire">Book Appointment</a>
              <button 
                className="mobile-menu-btn" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img src="/logo.png" alt="Riva Diamonds Logo" className="drawer-logo" />
          <button className="drawer-close" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</a></li>
          <li><a href="#designer" onClick={() => setIsMobileMenuOpen(false)}>The Designer</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Inquire</a></li>
        </ul>
        <div className="drawer-footer">
          <p className="drawer-designer-tag">Designer: Pooja Soni</p>
          <p>© Riva Diamonds Pvt Ltd</p>
        </div>
      </div>
      
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </>
  );
}
