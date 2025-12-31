import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    const resumeUrl = "/Trishan_Debnath_Resume.pdf";

    return (
        <div className="resume-container">
            <h2 className="profile-header">My Resume</h2>
            <div className="resume-wrapper">
                <object data={resumeUrl} type="application/pdf" className="resume-frame">
                    <p>Your browser does not support PDFs.
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Download the PDF</a>.
                    </p>
                </object>
            </div>
            <a href={resumeUrl} download="Trishan_Debnath_Resume.pdf" className="download-btn">
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
