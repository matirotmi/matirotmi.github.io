import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/ExperienceCarousel.css';

const ExperienceCarousel = () => {
  const experiences = [
    {
      company: 'MAIN | Digital & Trade Marketing | Information Technology',
      role: 'IT Trainee',
      period: 'Agosto 2021 - Diciembre 2021',
      description: 'Crear chatbots para los diferentes sitios web de los clientes, adaptándose a las necesidades de cada cliente.',
      technologies: ['Microsoft Excel', 'Javascript', 'HTML', 'CSS', 'Bots']
    },
    {
      company: 'Andreani Grupo Logistico ',
      role: 'Pasante',
      period: 'Diciembre 2021 - Junio 2022',
      description: 'Desarrollo de nuevas funcionalidades y mantenimiento de aplicaciones web tanto en el Frontend como en el Backend.',
      technologies: ['Javascript', 'Typescript', 'React.js', 'Redux', 'Next.js', 'SQL', 'C# .Net', 'RestAPI', 'Microservices']
    },
    {
      company: 'Andreani Grupo Logistico ',
      role: 'Desarrollador Jr',
      period: 'Junio 2022 - Diciembre 2022',
      description: 'Desarrollo de nuevas funcionalidades y mantenimiento de aplicaciones web tanto en el Frontend como en el Backend.',
      technologies: ['Javascript', 'Typescript', 'React.js', 'Redux', 'Next.js', 'SQL', 'C# .Net', 'RestAPI', 'Microservices']
    },
    {
      company: 'Oracle | Pasante GenO',
      role: 'Pasante GenO',
      period: 'Agosto 2023 - Diciembre 2023',
      description: 'Como pasante en Oracle fui rotando por las distintas areas que tiene la empresa desempenando una gran variedad de roles lo que me dio un gran panorama general de la ampresa.',
      technologies: ['Oracle OCI']
    },
    {
      company: 'University of Palermo',
      role: 'Profesor asistente',
      period: 'Marzo 2023 - Marzo 2024',
      description: 'Dar apoyo docente en las clases de introduccion a la programacion, donde se les da a los alumnos el primer acercamiento a los alumnos en la programacion',
      technologies: ['Python', 'Teaching', 'Comunication']
    },
    {
      company: 'Qaracter',
      role: 'Software Developer',
      period: 'Enero 2024 - Diciembre 2024',
      description: 'Desarrollo y mantenimiento de microservicios en sistemas bancarios usando Java Springboot',
      technologies: ['SQL', 'PL/SQL', 'Java', 'Springboot', 'Hibernate', 'Cucumber']
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('none');

  const next = () => {
    if (currentIndex < experiences.length - 1) {
      setDirection('right');
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection('left');
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '1.5rem' }}>
      <h2 className="section-title">Professional Experience</h2>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Experience Card */}
        <div 
          className={`experience-card ${direction === 'right' ? 'animate-slideLeft' : ''}
            ${direction === 'left' ? 'animate-slideRight' : ''}`}
          onAnimationEnd={() => setDirection('none')}
        >
          <div className="content-wrapper">
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 300,
              color: '#0f172a',
              marginBottom: '0.5rem'
            }}>
              {experiences[currentIndex].company}
            </h3>
            <p style={{ 
              fontSize: '1.125rem',
              color: '#1e293b',
              marginBottom: '0.25rem'
            }}>
              {experiences[currentIndex].role}
            </p>
            <p style={{ 
              fontSize: '0.875rem',
              color: '#475569'
            }}>
              {experiences[currentIndex].period}
            </p>
          </div>
          
          <p className="description">
            {experiences[currentIndex].description}
          </p>
          
          <div className="tech-tags">
            {experiences[currentIndex].technologies.map((tech, index) => (
              <span 
                key={index}
                className="tech-tag"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation">
          <div className="nav-buttons">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="nav-button"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex === experiences.length - 1}
              className="nav-button"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
          
          <div className="pagination">
            {currentIndex + 1} / {experiences.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;