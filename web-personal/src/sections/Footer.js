// components/Footer/Footer.jsx
import React from 'react';
import { Linkedin, Mail, Phone, Github } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-links">
        <a href="mailto:your.matirotmi@gmail.com">
          <Mail className="icon" />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/matias-rotmistrovsky-702864197/">
          <Linkedin className="icon" />
          <span>LinkedIn</span>
        </a>
        <a href="tel:+5491134355934">
          <Phone className="icon" />
          <span>Phone</span>
        </a>
        <a href="https://github.com/matirotmi">
          <Github className="icon" />
          <span>Github</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;