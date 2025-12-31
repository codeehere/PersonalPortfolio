import React from 'react';
import '../styles/Academics.css';

const Academics = () => {
    const academicTimeline = [
        { year: "2026 (Expected)", title: "Class 12 Completion", description: "Currently at 4th SEM in 12th class.Passed 3rd SEM with 84% grade." },
        { year: "2024", title: "Class 10 Completion", description: "Completed 10th grade with 67% grade ." },
        // Add more if known
    ];

    return (
        <div className="academics-container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Academic Journey</h2>
            <div className="timeline">
                {academicTimeline.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ color: '#667eea' }}>{item.year}</h3>
                            <h4>{item.title}</h4>
                            <p style={{ color: '#cbd5e0' }}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Academics;
