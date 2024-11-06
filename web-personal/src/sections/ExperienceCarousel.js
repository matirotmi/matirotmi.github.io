import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/ExperienceCarousel.css';

const ExperienceCarousel = () => {
  const experiences = [
    {
      company: 'MAIN | Digital & Trade Marketing | Information Technology',
      role: 'IT Trainee',
      period: 'August 2021 - December 2021',
      description: 'Create chat bots for diferent client websites, adapting to each clients needs and optimize of daily operations',
      technologies: ['Microsoft Excel', 'Javascript', 'HTML', 'CSS', 'Bots']
    },
    {
      company: 'Andreani Grupo Logistico ',
      role: 'Intern',
      period: 'December 2021 - June 2022',
      description: 'Development of new functionalities and maintenance of web applications both in the Frontend and the Backend',
      technologies: ['Javascript', 'Typescript', 'React.js', 'Redux', 'Next.js', 'SQL', 'C# .Net', 'RestAPI', 'Microservices']
    },
    {
      company: 'Andreani Grupo Logistico ',
      role: 'Jr Developer',
      period: 'June 2022 - December 2022',
      description: 'Development of new functionalities and maintenance of web applications both in the Frontend and the Backend',
      technologies: ['Javascript', 'Typescript', 'React.js', 'Redux', 'Next.js', 'SQL', 'C# .Net', 'RestAPI', 'Microservices']
    },
    {
      company: 'Oracle',
      role: 'Intern | GenO Experience',
      period: 'August 2023 - December 2023',
      description: 'Como pasante en Oracle fui rotando por las distintas areas que tiene la empresa desempenando una gran variedad de roles lo que me dio un gran panorama general de la ampresa.',
      technologies: ['Oracle OCI']
    },
    {
      company: 'University of Palermo',
      role: 'Assistant Professor',
      period: 'March 2023 - March 2024',
      description: 'Teach classes, grade papers, and give assitance to the professor and the students',
      technologies: ['Python', 'Teaching', 'Comunication']
    },
    {
      company: 'Qaracter',
      role: 'Software Developer',
      period: 'January 2024 - December 2024',
      description: 'Develop new functionalities and perform maintenance on banking systems',
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