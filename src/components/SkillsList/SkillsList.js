import React from 'react';
import '../SkillsList/SkillsList.css';
import html from '../../images/logo-html5.svg';
import js from '../../images/logo-javascript.svg';
import reactImg from '../../images/logo-react.svg';
import nodeImg from '../../images/logo-nodejs.svg';
import mongoDB from '../../images/MongoDB_Logo.svg';
import expressImg from '../../images/expressjs-icon.svg';
import ListContent from '../ListContent/ListContent.js';

function SkillsList() {
    return (
        <div className="skills-list-container">
            <h2>Set of skills</h2>
            <div className="list">
                <ListContent title={'HTML & CSS'} image={html} description={"I am creating small but modern web applications, following good practices. I try to learn on every step, especially when it comes to the field of CSS animations, because knowing how much we can build with HTML & CSS alone inspires me a lot!"}/>
                <ListContent title={'JavaScript'} image={js} description={"JS! It was a love from first site! During my education I have learned: functional programming, DOM manipulation, unit testing with Mocha & Chai, regular expressions, asynchronous programming (Promises, async / await), AJAX, templating and routing... you know, the usual stuff!"}/>
                <ListContent title={'React.js'} image={reactImg} description={"Learning React was a game changer for me! I have built a cute SPA application with it and I just loved the experience! The process included learning JSX syntax, working with queries and promises, splitting single component applications, routing and form validation, using React Hooks and functional components. And yes, I admit, I am a sinner... I wasn't using class components, at all!"}/>
                <ListContent title={'Node.js'} image={nodeImg} description={"Node.js! What would we do without it? We need it as we need breathing, figuratively speaking."}/>
                <ListContent title={'MongoDB'} image={mongoDB} description={"Development of server-side JavaScript applications on the Node.js platform, using Express.js as a framework, non-relational database (MongoDB) and the Mongoose library for retrieving data from it. Building of REST API."}/>
                <ListContent title={'Express.js'} image={expressImg} description={"Because it just makes life easier!"}/>
            </div>
        </div>
    )
}

export default SkillsList;
