import React, { useState } from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Nav, Tab } from "react-bootstrap";
import TypographyList from "../../demo-components/typography/TypographyList";
import Styling from "../../demo-components/typography/Styling";

const Typography = () => {
  const [currentTab, setCurrentTab] = useState("examples");

  const handleTabSelect = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  return (
    <Layout>
      <h1 className="display-4 text-center">Typography</h1>
      <br></br>
      <Container style={{ maxWidth: "750px" }}>
        <p className="lead text-center">
        Typography is the art of arranging type to make written language legible, readable, and appealing when displayed. In React-Bootstrap, typography is achieved through the use of various components and styles, including headings, paragraphs, blockquotes, and more. Understanding the basics of typography is essential in creating well-designed and easy-to-read applications.
        </p>
        <br></br>
        <Tab.Container activeKey={currentTab} onSelect={handleTabSelect}>
          <Nav
            variant="tabs"
            defaultActiveKey={currentTab}
            className="d-flex justify-content-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="examples">Headings and Paragraphs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="styling">Dynamic Styling</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="examples" style={{ paddingTop: '20px' }}>
              <Container>
                <TypographyList />
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="styling" style={{ paddingTop: '20px' }}>
              <Container>
                <Styling />
                <p className="lead" style={{ paddingTop: '20px' }}> Adjust the slider or select a colour to customise the text</p>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </Layout>
  );
};

export default Typography;
