import React from "react";
import { Tab, Nav, Container } from "react-bootstrap";
import BootstrapClasses from "./BootstrapTables";
import Layout from "../../base-components/layout/Layout";
import Introduction from "./Introduction";
import UsingJsx from "./UsingJsx";
import ImportExportPage from "./ImportsExports";
import UsingCss from "./UsingCss";

const GettingStarted = () => {
  return (
    <Layout>
      <Container>
        <Tab.Container id="v-pills-tab" defaultActiveKey="home">
          <div className="d-flex align-items-start">
            <Nav
              className="flex-column nav-pills nav-pills-secondary me-3"
              role="tablist"
              aria-orientation="vertical"
            >
              <Nav.Item>
                <Nav.Link eventKey="home">Using this App</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="importexport">Imports and Exports</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="usingjsx">Using JSX</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="usingcss">Using CSS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bootstrap">Bootstrap Classes</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <Introduction />
              </Tab.Pane>
              <Tab.Pane eventKey="importexport">
                <ImportExportPage />
              </Tab.Pane>
              <Tab.Pane eventKey="usingjsx">
                <UsingJsx />
              </Tab.Pane>
              <Tab.Pane eventKey="usingcss">
                <UsingCss />
              </Tab.Pane>
              <Tab.Pane eventKey="bootstrap">
                <BootstrapClasses />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </Container>
    </Layout>
  );
};

export default GettingStarted;
