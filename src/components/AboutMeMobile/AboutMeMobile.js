import React from 'react';
import '../AboutMeMobile/AboutMeMobile.css';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.js';

function AboutMeMobile() {
    return (
        <div className="mobile">
            <div className="box">
                <p>About Me</p>
            </div>
            <div className="box">
                <p>More Info</p>
            </div>
            <div className="box">
                <p>My Education</p>
            </div>
            <div className="box">
                <p>My Location</p>
            </div>
            <div className="box">
                <p>Current Projects</p>
            </div>
            <div className="box">
                <p>My Hobbies</p>
            </div>
            <div className="box">
                <p>Languages</p>
            </div>
        </div>
    );
}

export default AboutMeMobile;
