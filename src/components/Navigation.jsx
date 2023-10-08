import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Navigation.css';

// Navigation component
const Navigation = () => {
  return (
    //  Navbar
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-0.5 mt-0">
      <Container>
        {/* Brand and Navbar Toggle */}
        <Navbar.Brand as={Link} to="/Meriam-Portfolio/">Meriam Sadio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation Links */}
            <Nav.Link as={Link} to="/Meriam-Portfolio/about" className="fs-5 nav-link-highlight shadow-lg">About me</Nav.Link>
            <Nav.Link as={Link} to="/Meriam-Portfolio/portfolio" className="fs-5 nav-link-highlight shadow-lg">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/Meriam-Portfolio/contact" className="fs-5 nav-link-highlight shadow-lg">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Meriam-Portfolio/resume" className="fs-5 nav-link-highlight shadow-lg">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export Navigation
export default Navigation;
