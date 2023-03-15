import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SiteTemplate = ({ children }) => {
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top">
        <Container>
          <Navbar.Brand>Social Media Brand</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
      <footer className="py-3 bg-light text-center">
        <Container>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </Container>
      </footer>
    </>
  );
};

export default SiteTemplate;
