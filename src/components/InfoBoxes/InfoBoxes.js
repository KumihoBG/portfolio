import '../InfoBoxes/InfoBoxes.css';
import React from 'react';

function InfoBoxes({ text }) {
    return (
        <div>
           <p id="info-par">{text}</p>
        </div>

    )
}

export default InfoBoxes;