import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const FixedTopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="fixed-navbar-nav" />
      <Navbar.Collapse id="fixed-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FixedTopNavbar;
