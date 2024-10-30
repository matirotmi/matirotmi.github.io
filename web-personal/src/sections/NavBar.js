// components/Navbar/Navbar.jsx
import React, { useState, useEffect  } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand ">Portafolio website</div>
      
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