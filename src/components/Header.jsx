import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

// Header component
function Header() {
  return (
    <>
      {/* Header Container */}
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            {/* Header Title */}
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <Link
                to="/Meriam-portfolio/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Meriam Sadio
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
      {/* Navigation Component */}
      <Navigation />
    </>
  );
}

// Export Header
export default Header;
