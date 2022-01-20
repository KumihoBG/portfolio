import React, { useState } from 'react';
import '../CircularItems/CircularItems.css';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.js';

function CircularItems() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="menu-container">
            <div id="menu" className={isActive ? "menu" : 'menu active'}>
            <div onClick={handleToggle} className="toggle">
                <p className="action">Click Me</p>
                <li className="video" style={{ '--i': 0 }}>
                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                    <div className="box">
                        <p>About Me</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div>    
                </li>
                <li className="video" style={{ '--i': 1 }}>
                    <ion-icon name="information-circle-outline"></ion-icon>
                    <div className="box">
                        <p>More Info</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div> 
                </li>
                <li className="video" style={{ '--i': 2 }}>
                    <ion-icon name="school-outline"></ion-icon>
                    <div className="box">
                        <p>My Education</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div> 
                </li>
                <li className="video" style={{ '--i': 3 }}>
                    <ion-icon name="home-outline"></ion-icon>
                    <div className="box">
                        <p>My Location</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div> 
                </li>
                <li className="video" style={{ '--i': 4 }}>
                    <ion-icon name="time-outline"></ion-icon>
                    <div className="box">
                        <p>Current Projects</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div> 
                </li>
                <li className="video" style={{ '--i': 5 }}>
                    <ion-icon name="color-palette-outline"></ion-icon>
                    <div className="box">
                        <p>My Hobbies</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div> 
                </li>
                <li className="video" style={{ '--i': 6 }}>
                    <ion-icon name="earth-outline"></ion-icon>
                    <div className="box">
                        <p>Languages</p>
                        <YoutubeEmbed embedId="56WndKK9ao8"/>
                    </div> 
                </li>
            </div>
        </div>
        </div>
    )
}

export default CircularItems;
