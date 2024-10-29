// components/Skills/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const technicalSkills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript'],
    backend: ['Node.js', 'Python', 'Java', 'SQL'],
    testing: ['Jest', 'React Testing Library', 'Cypress'],
    data: ['MongoDB', 'PostgreSQL', 'Redis'],
    softSkills: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'],
    idiomas: ['Espanol', 'Ingles', 'Hebreo'],

  };

  return (
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-section">
        <div className="technical-skills">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skills-grid">
              {technicalSkills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skills-grid">
              {technicalSkills.backend.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>Testing</h4>
            <div className="skills-grid">
              {technicalSkills.testing.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>Data</h4>
            <div className="skills-grid">
              {technicalSkills.data.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>Soft Skills</h4>
            <div className="skills-grid">
              {technicalSkills.softSkills.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h4>Idiomas</h4>
            <div className="skills-grid">
              {technicalSkills.idiomas.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;