import React, { useState } from 'react';
import '../styles/MainScreen.css';
import Home from './Home';
import Profile from './Profile';
import Skills from './Skills';
import Academics from './Academics';
import Resume from './Resume';
import Story from './Story';
import Projects from './Projects';

const MainScreen = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const menuItems = [
        'Home',
        'Profile',
        'Skills',
        'Academics',
        'Resume',
        'Story',
        'Projects'
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Home':
                return <Home />;
            case 'Profile':
                return <Profile />;
            case 'Skills':
                return <Skills />;
            case 'Academics':
                return <Academics />;
            case 'Resume':
                return <Resume />;
            case 'Story':
                return <Story />;
            case 'Projects':
                return <Projects />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="main-screen-container">
            <nav className="top-nav">
                <ul className="nav-list">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className={`nav-item ${activeTab === item ? 'active' : ''}`}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="screen-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default MainScreen;
