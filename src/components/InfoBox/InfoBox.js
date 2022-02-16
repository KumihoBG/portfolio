import '../InfoBox/InfoBox.css';
import React from 'react'

function InfoBox({ text, title }) {
    return (
        <div className="info-box-container">
            <div className="box">
                <h3>{title}</h3>
                <p id="info-par">{text}</p>
            </div>
        </div>
    )
}

export default InfoBox