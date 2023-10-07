import React from "react";
import { Container, Row, Col, Card, Image } from "react-materialize";
import "./style.css"

function AboutMe() {
  return (
    <section id="AboutMe" className="py-5">
      <h1 className="AboutMe-heading">About me</h1>
      <Container>
        <Row>
          <Col 
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          > 
           <Image scr={avatar} rounded fluid className="AboutMe-image"/>
          </Col>
          <Col xs={12} md={18}>
            <Card>
              <Card.body>
                <Card.Title className="text-center mb-4">
                  About Meriam Sadio
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore sequi corrupti cupiditate repellat ex eos. Dolores ullam, consequatur laboriosam quidem impedit esse illum magnam maxime. Adipisci sit asperiores qui.
                </Card.Text>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vitae delectus iusto architecto ducimus numquam dicta, exercitationem optio necessitatibus quisquam ipsam cupiditate, iure saepe corrupti ad iste nobis ex sapiente!
                </Card.Text>
              </Card.body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;


