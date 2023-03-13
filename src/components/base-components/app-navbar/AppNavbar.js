import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PageList from "../PageList";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="app-navbar-nav" />
      <Navbar.Collapse id="app-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/getting-started">Getting Started</Nav.Link>
          <NavDropdown title="Menu" id="app-nav-dropdown">
            {PageList.map((item, index) => (
              <NavDropdown.Item key={index} href={item.path}>
                {item.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;