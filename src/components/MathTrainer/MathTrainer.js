import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../MathTrainer/MathTrainer.css';
import CaseStudy from '../CaseStudy/CaseStudy.js';
import Loader from '../Loader/Loader.js';

function MathTrainer() {
    const bullet = '\u2022';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='case-study-math-trainer'>
            <Link className='back-link' to='/'><ion-icon name="arrow-undo-outline"></ion-icon> Back to Home</Link>
            <div className='case-study-math-container'>
                <Loader />
                <CaseStudy
                    title={'Math Trainer for kids'}
                    subtitle={'Training application in mathematics, giving the opportunity to practice the basic mathematical actions - addition, subtraction, multiplication and division.'}
                    projectType={'Personal Project'}
                    creationDate={'October 2021'}
                    role={'Personal project, created without any supervision.'}
                    summary={'When my young child began to have difficulty calculating in math class, I decided to help him while practicing HTML & CSS.\n\nThe application is divided into four parts according to the number of possible actions. A brief definition is given for each operation as well as an explanation of the displacement and associative property of numbers in mathematics.\nThe child should solve the task and then click a button. The answer is checked and a result is displayed, which informs the child whether his answer is correct or wrong.\n\nThe ease for me, as a parent, was that I didn\'t have to come up with new and new sample tasks. The convenience for my child was that even if he made a wrong answer, he did not feel ashamed in front of the computer, and like a video game, he tried to pass the "level".'}
                    challenge={'To create an application that is interesting for a small child without overloading his mind unnecessarily.\nTo convince the young child that mathematics is not such a difficult subject to study and that in practice everyone can achieve excellent results.'}
                    solution={`Part 1\n\n${bullet} Create the four basic mathematical actions\n${bullet} Implement calculations\n\nPart 2\n\n${bullet} Implement error handling\n${bullet} Implement result testing\n${bullet} Design enhancement\n${bullet} Create loading screen\n${bullet} Deploy the application in GitHub`}
                    result={'During the creation of this simple application, I realized that when I create for the benefit of other people, especially in the field of education, I have great pleasure and I myself learn fully at the same time.\n\nThis showed me that I was on the right track and that coding made me feel useful.'} />
            </div>
        </div>
    )
}

export default MathTrainer;
