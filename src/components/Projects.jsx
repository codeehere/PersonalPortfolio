import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projectList = [
        { title: "Personal Portfolio", desc: "This very website you are looking at! Built with React." },
        { title: "AI Research Tool", desc: "A tool to aggregate and summarize AI research papers (Concept)." },
        { title: "Student Management System", desc: "A comprehensive system to manage student data." },
        // Add more
    ];

    return (
        <div className="projects-container">
            <h2 className="profile-header">My Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
