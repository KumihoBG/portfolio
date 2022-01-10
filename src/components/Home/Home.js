import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card.js';
import CircularItems from '../CircularItems/CircularItems.js';
import '../Home/Home.css';
import HomeContent from '../HomeContent/HomeContent.js';
import Icons from '../Icons/Icons.js';
import ImageBox from '../ImageBox/ImageBox.js';

function Home() {
    return (
        <div className='home'>
        <section className='home-section'>
            <div className="container">
                <header>
                    <h2 className='logo'>
                        <span>P</span>
                        <span>a</span>
                        <span>v</span>
                        <span>l</span>
                        <span>e</span>
                        <span>t</span>
                        <span>a</span>
                        <span> </span>
                        <span>T.</span>
                    </h2>
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
                <Icons />
            </div>
        </section>
        <section id="info" className='about-me'>
            <h1 className='call-to-action'>Get to know me better</h1>
            <h3>My video introduction</h3>
            <CircularItems />
        </section>
        <section className='about'>
            <Card />
        </section>
        </div>
    )
}

export default Home;
