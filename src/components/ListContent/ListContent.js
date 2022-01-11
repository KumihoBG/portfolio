import React from 'react';
import '../ListContent/ListContent.css';

function ListContent({ image, title, description }) {
    return (
            <div className="list-content">
                <div className="title">
                    <img className="svg-img" src={image} alt="HTML icon" />
                    <h4>{title}</h4>
                </div>
                <p className="show-me">{description}</p>
            </div>
    )
}

export default ListContent;
