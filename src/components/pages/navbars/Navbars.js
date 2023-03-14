import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container } from "react-bootstrap";
import CenteredNavbar from "../../demo-components/navbar/CenteredNavbar";
import LeftSearchNavbar from "../../demo-components/navbar/LeftSearchNav";
import RightSearchNavbar from "../../demo-components/navbar/RightSearchNavbar";
import DarkNavbar from "../../demo-components/navbar/DarkNavbar";
import TransparentNavbar from "../../demo-components/navbar/TransparentNavbar";
import DropdownNavbar from "../../demo-components/navbar/DropdownNavbar";

const Navbars = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Navbars</h1>

      <Container style={{ maxWidth: "750px" }}>
        <p className="lead text-center">
          The Navbar component in React Bootstrap is used to create a responsive
          navigation bar that can be customized with your own logo, links, and
          dropdown menus.
        </p>
      </Container>
      <p className="lead">Dropdown Navbar</p>
      <DropdownNavbar />
      <br></br>
      <p className="lead text-center">
        The navbar component can incoprorate a form, such as for user searches.
      </p>
      <p className="lead">Search Navbar</p>
      <LeftSearchNavbar />
      <Container style={{ maxWidth: "750px" }}>
        <br></br>
        <p className="lead text-center">
          By default, the Navbar component has a light background color and
          contains a brand link on the left, a hamburger icon on the right for
          mobile devices, and a collapsible menu that appears when the hamburger
          icon is clicked.
        </p>
      </Container>
      <p className="lead">Transparent Navbar</p>
      <TransparentNavbar />
      <br></br>
      <p className="lead">Dark Navbar</p>
      <DarkNavbar />
      <Container style={{ maxWidth: "750px" }}>
        <br></br>
        <p className="lead text-center">
          By default, the Navbar and Nav components have a left margin, but you
          can remove it by adding the className="mr-auto" prop to the Nav
          component.
        </p>
      </Container>
      <br></br>
      <p className="lead">Centered Navbar</p>
      <CenteredNavbar />
      <br></br>
      <p className="lead">Right Search Navbar</p>
      <RightSearchNavbar />
    </Layout>
  );
};

export default Navbars;
