import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

function Home() {
    return (
        <section>
            <div className="container">
                <header>
                    <h2>Logo</h2>
                    <ul>
                        <Link className='hire-link' to='/contacts' alt='contact me'>Hire me</Link>
                    </ul>
                </header>
            </div>
        </section>
    )
}

export default Home;
