import React from "react";
import PropTypes from "prop-types";
import '../Project/Project.css';
import jsFlashcards from '../../images/js-flashcards.png';

const Project = () => (
  <div className="project-responsive">
    <img src={jsFlashcards} alt="JavaScript Flashcards Trainer" />
  </div>
);

Project.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Project;