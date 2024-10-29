// components/Experience/Experience.jsx
import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
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
    // Add more experiences as needed
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-header">
              <h3>{exp.company}</h3>
            </div>
            <span className="period">{exp.period}</span>
            <h4 className="role">{exp.role}</h4>
            <p className="description">{exp.description}</p>
            <div className="technologies">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;