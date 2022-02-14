import React from 'react';
import '../AboutMeMobile/AboutMeMobile.css';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.js';

function AboutMeMobile() {
    return (
        <div className="mobile">
            <div className="box">
                <p>About Me</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
            <div className="box">
                <p>More Info</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
            <div className="box">
                <p>My Education</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
            <div className="box">
                <p>My Location</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
            <div className="box">
                <p>Current Projects</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
            <div className="box">
                <p>My Hobbies</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
            <div className="box">
                <p>Languages</p>
                <YoutubeEmbed embedId="56WndKK9ao8" />
            </div>
        </div>
    );
}

export default AboutMeMobile;
