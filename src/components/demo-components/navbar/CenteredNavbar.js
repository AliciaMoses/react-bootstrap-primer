import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const CenteredNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Brand
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="center-navbar-nav" />
      <Navbar.Collapse
        id="center-navbar-nav"
        className="justify-content-center"
      >
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CenteredNavbar;
