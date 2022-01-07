import React from 'react';
import '../Icons/Icons.css';
import { Link } from 'react-router-dom';
import codewars from '../../images/codewars.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';
import linkedIn from '../../images/linkedin.png';

function Icons() {
    return (
        <div className='icons-container'>
            <ul className='icons'>
                <li>
                    <Link to='https://github.com/KumihoBG'>
                        <img src={github} alt="Github" />
                    </Link>
                    <Link to='https://www.codewars.com/users/KumihoBG'>
                        <img src={codewars} alt="Codewars" />
                    </Link>
                    <Link to='https://www.linkedin.com/in/pavleta-taseva/'>
                        <img src={linkedIn} alt="LinkedIn" />
                    </Link>
                    <Link to='https://www.facebook.com/kumiho.bg/'>
                        <img src={facebook} alt="Facebook" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Icons;
