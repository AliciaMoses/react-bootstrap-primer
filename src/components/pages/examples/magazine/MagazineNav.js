
import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


const MagazineNav = () => {
  return (

<Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" className='justify-content'>
  <Nav className="mr-auto">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="#/">Art</Nav.Link>
    <Nav.Link href="#/">Culture</Nav.Link>
    <Nav.Link href="#/">Lifestyle</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  );
};

export default MagazineNav;


