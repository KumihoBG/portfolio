import React from 'react';
import '../ImageBox/ImageBox.css';
import image from '../../images/character.png';

function ImageBox() {
    return (
        <div className='image-box'>
            <img src={image} alt="Profile" />
        </div>
    )
}

export default ImageBox;
