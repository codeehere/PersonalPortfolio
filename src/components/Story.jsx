import React from 'react';
import '../styles/Story.css';

const Story = () => {
    return (
        <div className="story-container">
            <h2 className="profile-header">My Story</h2>
            <div className="story-text">
                <p>
                    Every journey begins with a spark. For me, it was my first encounter with a computer.
                    The idea that I could give instructions to a machine and have it execute them was fascinating.
                </p>
                <p>
                    Over the years, this fascination turned into a passion for solving problems using code.
                    I started with simple scripts and gradually moved to building full-fledged applications.
                </p>
                <p>
                    Now, I am deeply exploring the world of Artificial Intelligence.
                    I dream of a future where AI augments human potential, and I want to be one of the people building that future.
                </p>
            </div>
        </div>
    );
};

export default Story;
