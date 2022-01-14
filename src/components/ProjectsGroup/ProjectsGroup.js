import React from "react";
import './ProjectsGroup.css';
import ProjectComponent from "../ProjectComponent/ProjectComponent.js";
import jsFlashcards from '../../images/js-flashcards.png';
import magesnitza from '../../images/magesnitza.png';
import mathTrainer from '../../images/math-trainer.png';

function ProjectsGroup() {
  return (
    <div className="group">
      <ProjectComponent 
      projectName={'js-flashcards'} 
      image={jsFlashcards} alt={"JavaScript Flashcards Trainer"} 
      linkOne={'https://github.com/KumihoBG/js-flashcards'} 
      linkTwo={'https://js-flashcards.herokuapp.com/'} title={"JavaScript Flashcard Trainer"} 
      description={"Web application representing a training system based on creating and managing flashcards containing terminology and definitions in the field of JavaScript."} 
      level={'Advanced. Most recent project (December 2021)'}/>

      <ProjectComponent 
      projectName={'magesnitza'} 
      image={magesnitza} alt={"Magesnitza - A novel"} 
      linkOne={'https://github.com/KumihoBG/kumihobg.github.io'} 
      linkTwo={'https://kumihobg.github.io/'} 
      title={"Website for my fantasy novel"} 
      description={"My second passion after programming is writing and telling stories. To present my first fantasy novel, I created an application entirely dedicated to its world and its characters."} 
      level={'Advanced. Time of creation - October 2021'}/>

      <ProjectComponent 
      projectName={'math-trainer'} 
      image={mathTrainer} alt={"Simple Math Trainer application"} 
      linkOne={'https://github.com/KumihoBG/math-trainer'} 
      linkTwo={'https://kumihobg.github.io/math-trainer/'} 
      title={"Math Trainer"} 
      description={"I am a mother and like any parent, I worry about how my child is doing at school. Because he had trouble with math, I created an easy-to-use application to train him with it (the app is created with HTML, CSS and vanilla JS only)."} 
      level={'Basic. Simple project, created during October 2021'}/>
    </div>
  )
}

export default ProjectsGroup;