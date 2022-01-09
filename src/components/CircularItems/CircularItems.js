import React, { useState } from 'react';
import '../CircularItems/CircularItems.css';

function CircularItems() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className={isActive ? "menu" : 'menu active'}>
            <div onClick={handleToggle} className='toggle'>
                <p className='action'>Click Me</p>
                <li className="video" style={{ '--i': 0 }}>
                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                </li>
                <li className="video" style={{ '--i': 1 }}>
                    <ion-icon name="information-circle-outline"></ion-icon>
                </li>
                <li className="video" style={{ '--i': 2 }}>
                    <ion-icon name="school-outline"></ion-icon>
                </li>
                <li className="video" style={{ '--i': 3 }}>
                    <ion-icon name="home-outline"></ion-icon>
                </li>
                <li className="video" style={{ '--i': 4 }}>
                    <ion-icon name="time-outline"></ion-icon>
                </li>
                <li className="video" style={{ '--i': 5 }}>
                    <ion-icon name="color-palette-outline"></ion-icon>
                </li>
                <li className="video" style={{ '--i': 6 }}>
                    <ion-icon name="earth-outline"></ion-icon>
                </li>
            </div>
        </div>
    )
}

export default CircularItems;
