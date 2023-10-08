// import React from "react";
// import "../style/Project.css";

// // Project component
// function Project(props) {
//   return (
//     // Card container for each project
//     <div className="card">
//       {/* Project Title */}
//       <h5 className="card-title">{props.title}</h5>
      
//       {/* Project Image */}
//       <a href={props.deployedLink} target="_blank" rel="noreferrer">
//         <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
//       </a>
      
//       <div className="card-body">
//         {/* Project Description */}
//         <p className="card-text">{props.description}</p>
        
//         {/* Deployed App Button */}
//         <a
//           href={props.deployedLink}
//           target="_blank"
//           rel="noreferrer"
//           className="btn btn-deployed"
//         >
//           Deployed App
//         </a>
        
//         {/* GitHub Repo Button */}
//         <a
//           href={props.githubLink}
//           target="_blank"
//           rel="noreferrer"
//           className="btn btn-repo"
//         >
//           GitHub Repo
//         </a>
//       </div>
//     </div>
//   );
// }

// // Export Project
// export default Project;

import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import "../style/Project.css";

function Project(props) {
  return (
    <div className="card">
      <h5 className="card-title">{props.title}</h5>
      <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      </a>
      <div className="card-body">
        <p className="card-text">{props.description}</p>
        <a
          href={props.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-deployed"
        >
          Deployed App
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-repo"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

// Define PropTypes to specify expected prop types
Project.propTypes = {
  title: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
