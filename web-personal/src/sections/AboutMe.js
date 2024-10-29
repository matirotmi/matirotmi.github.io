// components/About/About.jsx
import React from 'react';
import '../styles/AboutMe.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="/fotoCV.jpg" alt="Your Name" />
      </div>
      <div className="about-content">
        <h1>Matias Rotmistrovsky</h1>
        <h3>Software Engineer</h3>
        <p>Soy estudiante de ultimo año Informática, Tengo experiencia en Desarrollo Web FullStack, Ciencia de datos y ML. Busco constantemente nuevos desafios y oportunidades para aprender cosas nuevas, para adquirir un amplio abanico de habilidades.</p>
      </div>
    </div>
  );
};

export default About;
