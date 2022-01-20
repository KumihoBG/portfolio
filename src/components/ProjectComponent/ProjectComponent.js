import React from 'react';
import { Link } from 'react-router-dom';
import '../ProjectComponent/ProjectComponent.css';

function ProjectComponent({ projectName, image, alt, linkOne, linkTwo, title, description, level }) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={alt} />
        <Link to={`/case-study/${projectName}`} rel="noreferrer" className="view-project">Case Study</Link>
        <a href={linkTwo} rel="noreferrer" className="view-project">View Project</a>
      </div>
      <div className="project-info">
        <div className="project-card">
          <h1>{title}</h1>
          <h4>Level of skills: {level}</h4>
          <p>{description}</p>
          <a href={linkOne} rel="noreferrer"><ion-icon name="logo-github"></ion-icon> View on GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent;
