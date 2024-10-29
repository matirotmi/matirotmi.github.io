// components/Footer/Footer.jsx
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-links">
        <a href="mailto:your.email@example.com">
          <Mail className="icon" />
          <span>Email</span>
        </a>
        <a href="https://linkedin.com/in/yourprofile">
          <Linkedin className="icon" />
          <span>LinkedIn</span>
        </a>
        <a href="tel:+1234567890">
          <Phone className="icon" />
          <span>Phone</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;