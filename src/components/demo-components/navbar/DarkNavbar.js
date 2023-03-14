import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const DarkNavbar = () => {
  return (
    <Navbar variant="dark" className="bg-dark" expand="lg">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="dark-navbar-nav" />
      <Navbar.Collapse id="dark-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline style={{ display: "flex" }}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" style={{ marginLeft: "5px" }}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DarkNavbar;
