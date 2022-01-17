import React from 'react';
import { Link } from 'react-router-dom';
import '../JsFlashcards/JsFlashcards.css';
import CaseStudy from '../CaseStudy/CaseStudy.js';
import DemoFlashcard from '../DemoFlashcard/DemoFlashcard.js';

function JsFlashcards() {
    const bullet = '\u2022';

    return (
        <div className='case-study-main'>
           <Link className='back-link' to='/'><ion-icon name="arrow-undo-outline"></ion-icon> Back to Home</Link>
            <div className='case-study-container'>
                <CaseStudy 
                title={'Js Flashcards Trainer'} 
                subtitle={'Web application representing a training system based on creating and managing flashcards containing terminology and definitions in the field of JavaScript.'} 
                projectType={'Graduation Project'} 
                creationDate={'December 2021'} 
                role={'Personal project, created without any supervision.'}
                summary={'The creation of the project has a purely practical purpose - to help prepare for job interviews.\n\nThe decision was to create a self-learning system with set of flashcards. My goal in building the application was to make it easy to develop and expand in the future, while the growth of flashcard collections continued to be in an organized form.\n\nAs a result, I was able to create an application that is easy to expand and fully achieves the goals for which it was created - to help people learn new material by pronouncing terminology and increase success by using auditory memory.'} 
                challenge={'Create a self-learning system to help make learning JavaScript easier, especially for people with memory problems.\nThe system aims to improve knowledge through the use of visual and auditory memory (it has been proven that a person remembers better if he hears his own voice to say the necessary words).'} 
                solution={`Part 1\n\n${bullet} Create and set up an application in Back4app\n${bullet} Deploy the application in Heroku\n${bullet} Login / Register page, logout functionality\n${bullet} Single Flashcard component functionality\n\nPart 2\n\n${bullet} Creating a landing page\n${bullet} Creating a home page\n${bullet} Flashcard Details\n${bullet} Flashcards library\n${bullet} My Cards page\n${bullet} Practice page\n${bullet} Create Page\n${bullet} Edit Page\n${bullet} Delete functionality\n${bullet} Profile page\n${bullet} Context API\n${bullet} Implement pagination for all collections on the page\nTechnologies\n${bullet} HTML, CSS, JavaScript, React.JS\nDependencies: Parse, React notifications, React Scripts, React Scroll, React Spinners\nHeroku, Back4app as BAAS`} 
                result={'Working on this project made me grow significantly - I learned how to structure my goals, how to follow a plan, build logic and on this basis to build the architecture of the project itself.\n\nI put myself in the place of UX designers, trying to find the most optimal design at this stage for the benefit of users. I took on the role of content creator in building my landing page. I looked for appropriate tutorials to help me in the process of creating CSS animations which also accumulated a lot of experience for myself. In general, I learned a lot about React.js in the process and I am eager to achieve even more in the future.'}/>
                <DemoFlashcard />
            </div>
        </div>
    )
}

export default JsFlashcards;
