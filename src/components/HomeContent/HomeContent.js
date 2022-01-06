import { Link } from 'react-router-dom';
import '../HomeContent/HomeContent.css';

import React from 'react'

function HomeContent() {
    return (
        <div className='content'>
            <h2>Who am I?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident facilis reprehenderit rerum corrupti non! Recusandae natus ut asperiores obcaecati sapiente quasi hic tenetur quia libero non quo, laborum provident.</p>
            <Link to='/details'>Read More</Link>
        </div>
    )
}

export default HomeContent
