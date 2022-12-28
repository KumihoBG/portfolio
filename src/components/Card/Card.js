import React from 'react';
import '../Card/Card.css';
import pavleta from '../../images/character.png';

function Card() {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="card-content">
                    <h2>Hire Me</h2>
                    <p>If you like my projects and would like to give me a chance to work for you, you can download my resume by clicking the button below.</p>
                    <a className='home-content-btn' target="_blank" href='/documents/CV-EN-Pavleta Taseva.pdf' download>Download my Resume</a>
                </div>
                <img src={pavleta} alt="Pavleta Taseva" />
            </div>
        </div>
    )
}

export default Card;
