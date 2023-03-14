import React, { useState } from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Nav, Tab } from "react-bootstrap";
import DropdownForms from "./DropdownForms";
import CheckboxForms from "./CheckboxForms";

const DynamicForms = () => {
  const [currentTab, setCurrentTab] = useState("dropdown");

  const handleTabSelect = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  return (
    <Layout>
      <h1 className="display-4 text-center">Dynamic Forms</h1>
      <br></br>
      <Container style={{ maxWidth: "750px" }}>
        <p className="lead text-center">
          Forms in web applications are an essential tool for collecting user
          data. However, forms can also be used more dynamically to provide
          users with the ability to transform and display dynamic content based
          on their inputs. With the use of React hooks and React Bootstrap, we
          can add additional functionality to our forms, making them more
          interactive and user-friendly.
        </p>
        <br></br>
        <Tab.Container activeKey={currentTab} onSelect={handleTabSelect}>
          <Nav
            variant="tabs"
            defaultActiveKey={currentTab}
            className="d-flex justify-content-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="dropdown">Dropdown Form</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="checkbox">Checkbox Form</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="dropdown">
              <Container>
                <DropdownForms />
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="checkbox">
              <Container>
                <CheckboxForms/>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </Layout>
  );
};

export default DynamicForms;
