import React from "react";
import profilePic from '../images/profile.jpeg'
import '../styles/DscCompo.css';

function DscCompo() {
    return (
        <div className="dsc-container">
            <header className="SubHeader">
                <div className="logo">
                    <img src={profilePic} alt="Trishan Debnath" />
                </div>
                <div className="name">
                    <h1>Trishan Debnath</h1>
                    <span className="status">STUDENT</span>
                </div>

            </header>
            <div className="info-Card">
                <p><b>Status</b> <span>Student</span></p>
                <p><b>Whatsapp</b> <span>+91 9641360922</span></p>
                <p><b>Email</b> <span><a href="mailto:krishnatrishan085@gmail.com"></a>krishnatrishan085@gmail.com</span></p>
                <p><b>Instagram</b> <span><a href="https://www.instagram.com/ok.trishan/">@ok.trishan</a></span></p>
            </div>
            <div className="DescriptionCard">
                Hello,
                I am Trishan Debnath from India.Currently studing at Class 12th ( end in 2026 ).Aiming to study AI.In future I wist to research in field of AI.I will try to contribute in AGI.
                Thanks for your valuable time.
            </div>
            <div className="skillCard">

            </div>
        </div>
    )
}
export default DscCompo;