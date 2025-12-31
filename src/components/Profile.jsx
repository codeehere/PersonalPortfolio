import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <h2 className="profile-header">About Me</h2>
            <div className="profile-content">
                <p>
                   I am a science student with a strong interest in technology, mathematics, and artificial intelligence. I enjoy understanding how complex systems work and applying logical thinking to solve real-world problems.
                </p>
                <br />
                <p>
                   Currently, I am focused on learning programming, machine learning, and core mathematical concepts while continuously improving my problem-solving skills. I prefer learning by building projects and experimenting, as it helps me develop a deeper and more practical understanding.

                    I value discipline, consistency, and independent learning. I believe steady effort and curiosity are more important than shortcuts, and I always aim to improve both my technical abilities and mindset.

                    In the future, I aim to work on advanced technology that is human-centered, practical, and impactful, contributing meaningfully through innovation and thoughtful design.
                </p>
            </div>
        </div>
    );
};

export default Profile;
