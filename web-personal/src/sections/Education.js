// components/Education/Education.jsx
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <div className="university-logo">
        <img src="fotoCV.jpg" alt="University Logo" />
      </div>
      <div className="education-details">
        <h2>Universidad de Palermo</h2>
        <h3>Licenciatura en informatica</h3>
        <p>GPA: 3.0</p>
      </div>
    </div>
  );
};

export default Education;