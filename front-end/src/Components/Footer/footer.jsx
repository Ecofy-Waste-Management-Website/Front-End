import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">Ecofy</span>
          </div>
          <p className="footer-tagline">
            Pioneering sustainable waste solutions for a cleaner, greener tomorrow.
          </p>
        </div>

        {/* Services Column */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Commercial Recycling</a></li>
            <li><a href="#">Hazardous Waste</a></li>
            <li><a href="#">AI Sorting Systems</a></li>
            <li><a href="#">Consultancy</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Journey</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Kit</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">✉</span>
              <a href="mailto:mailhello@ecofy.eco">mailhello@ecofy.eco</a>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <span>+94 (555) ECO-WASTE</span>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>123 Galle Face, Eco City, OR 97201</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Ecofy Waste Management. All rights reserved.</p>
        <a href="#" className="privacy-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;