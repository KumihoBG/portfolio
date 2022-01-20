import React from 'react';
import '../Loader/Loader.css';
import MathTrainerImg1 from '../../images/math-trainer-ss1.png';
import MathTrainerImg2 from '../../images/math-trainer-ss.png';

function Loader() {
    return (
        <div>
            <div className="loading">
                <h1>Math Trainer</h1>
                <div class="sprite">
                    <p class="p-loading">Loading</p>
                    <div class="robot"></div>
                </div>
                <div class="progress">
                    <div class="color">
                    </div>
                </div>
            </div>
            <div className='math-images'>
                <h3>Simple home page</h3>
                <img className='study-images' src={MathTrainerImg1} alt="The World of Magesnitza" />
                <h3>Immediate results, no confusion.</h3>
                <img className='study-images' src={MathTrainerImg2} alt="The story and how it all began" />
            </div>
        </div>
    )
}

export default Loader;
