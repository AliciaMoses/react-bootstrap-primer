import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";

const DropdownNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="standard-navbar-nav" />
      <Navbar.Collapse id="standard-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="standard-nav-dropdown">
            <NavDropdown.Item href="#link1">Link</NavDropdown.Item>
            <NavDropdown.Item href="#link2">
              Link
            </NavDropdown.Item>
            <NavDropdown.Item href="#link3">Link</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#link4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DropdownNavbar;