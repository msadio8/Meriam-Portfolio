// import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../style/About.css";
import avatar from "./your-avatar-image.jpg"; // Make sure to import your avatar image

function AboutMe() {
  return (
    // AboutMe section with a title and container for content
    <section id="AboutMe" className="py-5">
      <h1 className="AboutMe-heading">About me</h1>
      <Container>
        <Row>
          {/* Left column with avatar image */}
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <Image src={avatar} rounded fluid className="AboutMe-image" />
          </Col>
          {/* Right column with the card containing the information */}
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                {/* Title for the card */}
                <Card.Title className="text-center mb-4">About Meriam Sadio</Card.Title>
                {/* First paragraph of information */}
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore sequi corrupti cupiditate repellat ex eos. Dolores ullam, consequatur laboriosam quidem impedit esse illum magnam maxime. Adipisci sit asperiores qui.
                </Card.Text>
                {/* Second paragraph of information */}
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vitae delectus iusto architecto ducimus numquam dicta, exercitationem optio necessitatibus quisquam ipsam cupiditate, iure saepe corrupti ad iste nobis ex sapiente!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
