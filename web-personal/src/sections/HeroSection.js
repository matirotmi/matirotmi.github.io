import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <h1>Matias Rotmistrovsky</h1>
      <h2>Software developer</h2>
      <ChevronDown className="scroll-indicator" size={32} />
    </section>
  );
};

export default HeroSection;