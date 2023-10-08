import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/IMG_2396.png";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Meriam Sadio
                </Card.Title>
                <Card.Text>
                👋 Hello! I'm a Transaction Banking Associate with expertise in Business Banking Client Services. My role involves collaborating closely with Relationship Executives, Account Managers, and Product Managers to provide comprehensive banking solutions to relationship-managed clients, major clients, and high net worth individuals.
                🎓 Additionally, I'm currently pursuing my passion for web development as a student in the 2023 University of Sydney Bootcamp. My goal is to become a versatile full-stack web developer, continuously expanding my coding skill set.


                </Card.Text>
                <Card.Text>
                🎓 Additionally, I'm currently pursuing my passion for web development as a student in the 2023 University of Sydney Bootcamp. My goal is to become a versatile full-stack web developer, continuously expanding my coding skill set.
                
                🌐 You can explore my coding journey and projects by visiting my GitHub profile: @msadio8.

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
