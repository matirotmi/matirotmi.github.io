import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determinar si el scroll es hacia arriba o abajo
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Actualizar la visibilidad basada en la dirección del scroll
      setIsVisible(!isScrollingDown || currentScrollPos < 10);
      
      // Actualizar el estado de scroll para el efecto de fondo
      setIsScrolled(currentScrollPos > 50);
      
      // Guardar la posición actual para la siguiente comparación
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]); // Incluimos prevScrollPos en las dependencias

  const navItems = [
    { title: 'Home', href: '#hero' },
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#footer' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
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