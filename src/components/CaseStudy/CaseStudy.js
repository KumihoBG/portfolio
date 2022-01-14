import React from 'react';
import '../CaseStudy/CaseStudy.css';

function CaseStudy({title, subtitle, projectType, creationDate, role, summary, challenge, solution, result}) {
    return (
        <div className='case-study'>
            <h1 className='case-study-title'>{title}</h1>
            <h2 className='subtitle'>{subtitle}</h2>
            <div className='right-content'>
                <h3 className='project-type'>Project Type:</h3>
                <p>{projectType}</p>
                <h3 className='creation-date'>Time of creation:</h3>
                <p>{creationDate}</p>
                <h3 className='role'>My role:</h3>
                <p>{role}</p>
                <h3 className='summary'>Summary:</h3>
                <p>{summary}</p>
                <h3 className='challenge'>What was the challenge?</h3>
                <p>{challenge}</p>
                <h3 className='solution'>Solution</h3>
                <p>{solution}</p>
                <h3 className='result'>What did I achieve?</h3>
                <p>{result}</p>
            </div>
        </div>
    )
}

export default CaseStudy
