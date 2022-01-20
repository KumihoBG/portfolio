import React from 'react';
import { Link } from 'react-scroll';
import Card from '../Card/Card.js';
import CircularItems from '../CircularItems/CircularItems.js';
import '../Home/Home.css';
import HomeContent from '../HomeContent/HomeContent.js';
import Icons from '../Icons/Icons.js';
import ImageBox from '../ImageBox/ImageBox.js';
import Projects from '../Projects/Projects.js';
import SkillsList from '../SkillsList/SkillsList.js';

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
                            <Link 
                            className='link' 
                            activeClassName='active' 
                            to='menu' 
                            alt='About Pavleta Taseva'
                            spy={true}
                            smooth={true}
                            duration={500}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link className='link' 
                            activeClassName='active' 
                            to='projects' 
                            alt='My projects'
                            spy={true}
                            smooth={true}
                            duration={500}>                            
                                My Projects
                            </Link>
                        </li>
                    </ul>
                </header>
                <HomeContent />
                <ImageBox />
                <Icons />
            </div>
        </section>
        
        <h1 className='call-to-action'>Get to know me better</h1>
        <h3 className='call-to-action-h3'> Through my video introduction</h3>

        <section className='about-me'>
            <CircularItems />
            <SkillsList />
        </section>

        <Projects />

        <section className='about'>
            <Card />
        </section>
        </div>
    )
}

export default Home;
