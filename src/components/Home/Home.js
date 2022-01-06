import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Home/Home.css';
import HomeContent from '../HomeContent/HomeContent.js';
import IconsAside from '../IconsAside/IconsAside.js';
import ImageBox from '../ImageBox/ImageBox.js';

function Home() {
    return (
        <section className='home-section'>
            <div className="container">
                <header>
                    <h2 className='logo'>Logo</h2>
                    <ul>
                        <li>
                            <NavLink className='hire-link' activeClassName='active' to='/about' alt='About Pavleta'>About Me</NavLink>
                        </li>
                        <li>
                            <NavLink className='hire-link' activeClassName='active' to='/hire' alt='Hire Pavleta'>Hire Me</NavLink>
                        </li>
                    </ul>
                </header>
                <HomeContent />
                <ImageBox />
                <IconsAside />
            </div>
        </section>
    )
}

export default Home;
