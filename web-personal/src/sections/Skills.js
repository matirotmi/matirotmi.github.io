import React from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaPython } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiSpringboot, 
  SiHibernate, 
  SiMongodb, 
  SiMysql, 
  SiOracle, 
  SiMocha, 
  SiCucumber, 
  SiTestinglibrary, 
  SiSelenium 
} from 'react-icons/si';

const SkillsSection = () => {
  const techStack = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 className="tech-icon" style={{ color: '#E34F26' }} /> },
      { name: 'CSS3', icon: <FaCss3Alt className="tech-icon" style={{ color: '#1572B6' }} /> },
      { name: 'React', icon: <FaReact className="tech-icon" style={{ color: '#61DAFB' }} /> },
      { name: 'JavaScript', icon: <FaJs className="tech-icon" style={{ color: '#F7DF1E' }} /> },
      { name: 'TypeScript', icon: <SiTypescript className="tech-icon" style={{ color: '#3178C6' }} /> }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="tech-icon" style={{ color: '#339933' }} /> },
      { name: 'Springboot', icon: <SiSpringboot className="tech-icon" style={{ color: '#6DB33F' }} /> },
      { name: 'Hibernate', icon: <SiHibernate className="tech-icon" style={{ color: '#59666C' }} /> },
      { name: 'Python', icon: <FaPython className="tech-icon" style={{ color: '#3776AB' }} /> }
    ],
    dataManagement: [
      { name: 'MongoDB', icon: <SiMongodb className="tech-icon" style={{ color: '#47A248' }} /> },
      { name: 'MySQL', icon: <SiMysql className="tech-icon" style={{ color: '#4479A1' }} /> },
      { name: 'PL/SQL', icon: <SiOracle className="tech-icon" style={{ color: '#F80000' }} /> }
    ],
    testing: [
      { name: 'Mocha', icon: <SiMocha className="tech-icon" style={{ color: '#8D6748' }} /> },
      { name: 'Cucumber', icon: <SiCucumber className="tech-icon" style={{ color: '#23D96C' }} /> },
      { name: 'React Testing Library', icon: <SiTestinglibrary className="tech-icon" style={{ color: '#E33332' }} /> },
      { name: 'Selenium', icon: <SiSelenium className="tech-icon" style={{ color: '#43B02A' }} /> }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        
        <div className="tech-categories">
          <div className="tech-category">
            <h3>Frontend Development</h3>
            <div className="tech-circles">
              {techStack.frontend.map((tech, index) => (
                <div key={index} className="tech-circle">
                  {tech.icon}
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Backend Development</h3>
            <div className="tech-circles">
              {techStack.backend.map((tech, index) => (
                <div key={index} className="tech-circle">
                  {tech.icon}
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Data Management</h3>
            <div className="tech-circles">
              {techStack.dataManagement.map((tech, index) => (
                <div key={index} className="tech-circle">
                  {tech.icon}
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <h3>Testing</h3>
            <div className="tech-circles">
              {techStack.testing.map((tech, index) => (
                <div key={index} className="tech-circle">
                  {tech.icon}
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;