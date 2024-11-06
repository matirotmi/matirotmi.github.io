import React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I have a bachelor's in Computer Science, I have experience in FullStack Web Development, Data Science and Machine Learning.
            I am constantly looking for new challenges and opportunities to learn new things, to acquire a wide range of skills.
            At the moment my main goal is to dive deeper into Web or Mobile Development.
          </p>
          <div className="education">
            <h3>
              <GraduationCap /> Education
            </h3>
            <div className="education-item">
              <p className="degree">Bachelor's degree in Computer Science</p>
              <p className="university">University of Palermo</p>
              <p className="year">2020 - 2024</p>
            </div>
          </div>
        </div>
        <div className="profile-image">
          <div className="profile-card">
            <div className="profile-card-inner">
              <div className="profile-card-front">
                <img src="fotoMati.jpeg" alt="Profile" />
              </div>
              <div className="profile-card-back">
                <button className="about-btn">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;