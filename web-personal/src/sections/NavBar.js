// components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Education', href: '#education' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">Portafolio website</div>
      
      {/* Desktop Navigation */}
      <div className="nav-links-desktop">
        {navItems.map(item => (
          <a key={item.title} href={item.href}>{item.title}</a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      
      {isOpen && (
        <div className="nav-links-mobile">
          {navItems.map(item => (
            <a 
              key={item.title} 
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;