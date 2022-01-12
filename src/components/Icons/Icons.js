import React from 'react';
import '../Icons/Icons.css';
import codewars from '../../images/codewars.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';
import linkedIn from '../../images/linkedin.png';
import freecodecamp from '../../images/free-code-camp-logo.svg';

function Icons() {
    return (
        <div className='icons-container'>
            <ul className='icons'>
                <li>
                    <a rel="noreferrer" target="_blank" href='https://github.com/KumihoBG'>
                        <img src={github} alt="Github" />
                    </a></li>
                <li><a rel="noreferrer" target="_blank" href='https://www.codewars.com/users/KumihoBG'>
                    <img src={codewars} alt="Codewars" />
                </a></li>
                <li>
                    <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/pavleta-taseva/'>
                        <img src={linkedIn} alt="LinkedIn" />
                    </a></li>
                <li>
                    <a rel="noreferrer" target="_blank" href='https://www.facebook.com/kumiho.bg/'>
                    <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a rel="noreferrer" target="_blank" href='https://www.freecodecamp.org/Kumiho'>
                    <img src={freecodecamp} alt="freecodecamp.org" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Icons;
