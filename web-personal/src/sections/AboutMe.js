import React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Soy estudiante de ultimo año Informática, Tengo experiencia en Desarrollo Web FullStack, Ciencia de datos y ML. 
          Busco constantemente nuevos desafios y oportunidades para aprender cosas nuevas, para adquirir un amplio abanico de habilidades.</p>
          <div className="education">
            <h3>
              <GraduationCap />  Educacion
            </h3>
            <div className="education-item">
              <p className="degree">Licenciatura en informatica</p>
              <p className="university">Universidad de palermo</p>
              <p className="year">2020 - 2024</p>
            </div>
          </div>
        </div>
        <div className="profile-image">
          <img src="fotoMati.jpeg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;