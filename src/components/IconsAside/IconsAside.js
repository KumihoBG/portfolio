import React from 'react';
import '../IconsAside/IconsAside.css';
import { Link } from 'react-router-dom';
import codewars from '../../images/codewars.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';

function IconsAside() {
    return (
        <div>
            <ul className='icons'>
                <li>
                    <Link to='https://github.com/KumihoBG'>
                        <img src={github} alt="Github" />
                    </Link>
                    <Link to='https://www.codewars.com/users/KumihoBG'>
                        <img src={codewars} alt="Codewars" />
                    </Link>
                    <Link to='https://www.facebook.com/kumiho.bg/'>
                        <img src={facebook} alt="Facebook" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default IconsAside;
