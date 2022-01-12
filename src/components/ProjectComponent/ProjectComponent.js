import React from 'react';
import { Link } from 'react-router-dom';
import '../ProjectComponent/ProjectComponent.css';

function ProjectComponent({ image, alt, linkOne, linkTwo, title, description }) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={alt} />
        <Link to="#" rel="noreferrer" target="_blank" className="view-project">Case Study</Link>
        <a href={linkTwo} rel="noreferrer" target="_blank" className="view-project">View Project</a>
      </div>
      <div className="project-info">
        <div className="project-card">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={linkOne} rel="noreferrer" target="_blank"><ion-icon name="logo-github"></ion-icon> View on GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
