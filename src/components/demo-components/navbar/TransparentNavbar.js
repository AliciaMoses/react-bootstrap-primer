import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const TransparentNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="transparent-navbar-nav" />
      <Navbar.Collapse id="transparent-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TransparentNavbar;
