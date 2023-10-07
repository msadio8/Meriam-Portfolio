import React from "react";
import "../style/Project.css";

// Project component
function Project(props) {
  return (
    // Card container for each project
    <div className="card">
      {/* Project Title */}
      <h5 className="card-title">{props.title}</h5>
      
      {/* Project Image */}
      <a href={props.deployedLink} target="_blank" rel="noreferrer">
        <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      </a>
      
      <div className="card-body">
        {/* Project Description */}
        <p className="card-text">{props.description}</p>
        
        {/* Deployed App Button */}
        <a
          href={props.deployedLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-deployed"
        >
          Deployed App
        </a>
        
        {/* GitHub Repo Button */}
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-repo"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

// Export Project
export default Project;
