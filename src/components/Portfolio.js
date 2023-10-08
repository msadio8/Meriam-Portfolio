import React from "react";
import Project from "./Project";
import CovidTracker from "../images/CovidTracker.png";
import WorkDay from "../images/WorkDay.png";
import WeatherDashboard from "../images/WeatherDashboard.png";
import TechBlog from "../images/TechBlog.png";
import NoteTaker from "../images/NoteTaker.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  
  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Covid Tracker",
              description: "Covid Tracker Project",
              imgSrc: CovidTracker,
              deployedLink:
                "https://msadio8.github.io/Project-1-COVID-Flight-Tracker/",
              githubLink:
                "https://github.com/msadio8/Project-1-COVID-Flight-Tracker",
            },
            {
              title: "Weather Dashboard",
              description:
                "A weather dashboard that uses the Openweather API to retrieve current and future conditions for any city.",
              imgSrc: WeatherDashboard,
              deployedLink: "https://msadio8.github.io/Weather-Dashboard/",
              githubLink: "https://github.com/msadio8/Weather-Dashboard",
            },
            {
              title: "Tech Blog",
              description:
                "This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well",
              imgSrc: TechBlog,
              deployedLink: "https://tech-blogmvc-6b76500c3c3a.herokuapp.com/",
              githubLink: "https://github.com/msadio8/Tech-Blog",
            },
            {
              title: "Note Taker",
              description:
                "This application will use an Express.js back end and will save and retrieve note data from a JSON file and will be deployed in Heroku .",
              imgSrc: NoteTaker,
              deployedLink:
                "https://note-taker-challenge11-db387f76c791.herokuapp. com/",
              githubLink: "https://github.com/msadio8/Note-Taker",
            },
            {
              title: "Work Day Scheduler",
              description:
                "This is a simple calendar application that allows the user to save events for each hour of the day.",
              imgSrc: WorkDay,
              deployedLink:
                "https://msadio8.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler/",
              githubLink:
                "https://github.com/msadio8/Third-Party-APIs-Challenge-Work-Day-Scheduler",
            },
          ].map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

