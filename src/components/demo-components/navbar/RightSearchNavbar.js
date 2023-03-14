import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const RightSearchNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="right-navbar-nav" />
      <Navbar.Collapse
        id="right-navbar-nav"
        className="d-flex justify-content-between align-items-center"
      >
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form className="d-flex" role="search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success" style={{ marginLeft: "5px" }}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default RightSearchNavbar;
