import React from 'react';
import { Link } from 'react-router-dom';
import '../Card/Card.css';
import pavleta from '../../images/2.png';

function Card() {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="card-content">
                    <h2>Hire Me</h2>
                    <p>If you like my projects and would like to give me a chance to work for you, you can download my resume by clicking the button below.</p>
                    <Link className='home-content-btn' to='/resume'>Download my Resume</Link>
                </div>
                <img src={pavleta} alt="Pavleta Taseva" />
            </div>
        </div>
    )
}

export default Card;
