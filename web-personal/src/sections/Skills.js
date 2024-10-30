import React from 'react';
import '../styles/Skills.css';

const SkillsSection = () => {
  const techStack = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript', icon: '𝗝𝗦' },
      { name: 'HTML5', icon: '🅷' },
      { name: 'CSS3', icon: '🅲' },
      { name: 'TypeScript', icon: '𝗧𝗦' },
      { name: 'Next.js', icon: '𝗡' }
    ],
    backend: [
      { name: 'Node.js', icon: '𝗡𝗝' },
      { name: 'Python', icon: '🐍' },
      { name: 'Express', icon: '𝗘𝗫' },
      { name: 'Django', icon: '𝗗𝗝' }
    ],
    dataManagement: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'MySQL', icon: '𝗠𝗦' }
    ],
    testing: [
      { name: 'Jest', icon: '𝗝𝗧' },
      { name: 'Cypress', icon: '𝗖𝗬' },
      { name: 'React Testing Library', icon: '🧪' },
      { name: 'Selenium', icon: '𝗦𝗘' }
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
                  <div className="tech-icon">{tech.icon}</div>
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
                  <div className="tech-icon">{tech.icon}</div>
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
                  <div className="tech-icon">{tech.icon}</div>
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
                  <div className="tech-icon">{tech.icon}</div>
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