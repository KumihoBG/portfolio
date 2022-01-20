import React from 'react';
import { Link } from 'react-router-dom';
import '../Magesnitza/Magesnitza.css';
import CaseStudy from '../CaseStudy/CaseStudy.js';
import magesnitzaWorld from '../../images/magesnitza-world.png';
import magesnitzaSS from '../../images/magesnitza-ss.png';
import magesnitzaSS2 from '../../images/magesnitza-ss2.png';
import magesnitzaSS3 from '../../images/magesnitza-ss3.png';

function Magesnitza() {
    const bullet = '\u2022';

    return (
        <div className='case-study-magesnitza'>
           <Link className='back-link' to='/'><ion-icon name="arrow-undo-outline"></ion-icon> Back to Home</Link>
            <div className='magesnitza-container'>
                <CaseStudy 
                title={'Magesnitza\nA website for my fantasy novel'} 
                subtitle={'When a person has a passion for something, then everything he does in connection with this passion is obtained easily and as if in a magical way. Programming and storytelling combined in my own project.'} 
                projectType={'Personal Project'} 
                creationDate={'October 2021'} 
                role={'Project created without any supervision.'}
                summary={'I started this project for purely educational purposes as soon as I completed my JS Advanced course. I wanted to practice what I have already learned so far, as well as to include other functionalities that we were not taught during the course.\n\nMy goal was to have a website to promote my own book in the future. I wanted the app to have a working contact form and an active newsletter for collecting user emails in the database, necessary for possible marketing campaigns.\n\nIn addition, I implemented a profile system through which I could also expand my influence on potential future readers.'} 
                challenge={'Create a self-learning system to help make learning JavaScript easier, especially for people with memory problems.\nThe system aims to improve knowledge through the use of visual and auditory memory (it has been proven that a person remembers better if he hears his own voice to say the necessary words).'} 
                solution={`Part 1\n\n${bullet} Create and set up an application in Back4app\n${bullet} Deploy the application in GitHub\n${bullet} Login / Register page, logout functionality\n${bullet} Create the World map with information of each race and/or character\n\nPart 2\n\n${bullet} Creating a landing page with parallax effect on window scroll\n${bullet} Creating a home page - contact form, information about the book\n${bullet} Blog Page\n${bullet} Profile page with various account actions and functionalities\n${bullet} Translate into Bulgarian Language\n${bullet} Create footer and newsletter\n\nTechnologies\n${bullet} HTML, CSS, JavaScript\n\nDependencies: dompurify, lit-html, page\n\nDeploy: Github pages, Back4app as BAAS`} 
                result={'The work on this project was extremely interesting and inspiring. I managed to consolidate my knowledge in the field of templating, which was a great preparation for the upcoming course on React.js.\n\nAgain, I managed to practice my knowledge of HTML & CSS, trying to create interesting content. In the end, I felt like I was telling a fantastic story - but now no longer dressed in words, but in code.'}/>
                <div className='images'>
                    <h3>The map of the world</h3>
                    <img className='study-images' src={magesnitzaWorld} alt="The World of Magesnitza" />
                    <h3>This is my way of revealing myself and telling about my work.</h3>
                    <img className='study-images' src={magesnitzaSS} alt="The story and how it all began" />
                    <h3>And it was also a way to test my own skills creating the profile page.</h3>
                    <img className='study-images' src={magesnitzaSS2} alt="Profile page of Magesnitza" />
                    <h3>Working contact form and working newletter are a must when it comes to author's pages.</h3>
                    <img className='study-images' src={magesnitzaSS3} alt="Newsletter"/>
                </div>
            </div>
        </div>
    )
}

export default Magesnitza;
