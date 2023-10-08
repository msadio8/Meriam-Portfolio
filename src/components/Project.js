// import React from "react";
// import "../style/Project.css";

// // Project component
// function Project(props) {
//   return (
//     // Card container for each project
//     <div className="card">
//       <h5 className="card-title">{props.title}</h5>
//       <a href={props.deployedLink} target="_blank" rel="noreferrer">
//         <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
//       </a>
//       <div className="card-body">
//         {/* <h5 className="card-title">{props.title}</h5> */}
//         <p className="card-text">{props.description}</p>
//         <a
//           href={props.deployedLink}
//           target="_blank"
//           rel="noreferrer"
//           className="btn btn-deployed"
//         >
//           Deployed App
//         </a>
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
import PropTypes from "prop-types";
// import "../style/Project.css";

function Project(props) {
  return (
    <div className="card">
      <h5 className="card-title">{props.title}</h5>
      <a
        href={props.deployedLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${props.title} deployed app`}
      >
        <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      </a>
      <div className="card-body">
        <p className="card-text">{props.description}</p>
        <a
          href={props.deployedLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${props.title} deployed app`}
          className="btn btn-deployed"
        >
          Deployed App
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${props.title} GitHub repository`}
          className="btn btn-repo"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;

