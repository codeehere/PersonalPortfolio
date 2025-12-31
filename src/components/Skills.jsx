import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skillsList = [
        "Python", "React", "JavaScript", "HTML/CSS", "Machine Learning (Basics)", "Problem Solving"
    ];

    return (
        <div className="skills-container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #2d3748' }}>Technical Skills</h2>
            <div className="skills-grid">
                {skillsList.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3>{skill}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
