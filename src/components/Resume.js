// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/MeriamResume.pdf";

// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                Material UI
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Full Stack Web Developer</h4>
              <h5>The Universty Of Sydney</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Commonwealth Bank</h4>
              <h5>Transaction Banking Associate</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
            <div className="resume-item">
              <h4>Customer Service Specialist</h4>
              <h5>Commonwealth Bank </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                risus, non convallis odio aliquam eu.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">M</span>
                ongoDB
              </li>
              <li>
                <span className="teal-color">E</span>xpress
              </li>
              <li>
                <span className="teal-color">R</span>eact
              </li>
              <li>
                <span className="teal-color">N</span>ode.js
              </li>
              <li>SQL</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;