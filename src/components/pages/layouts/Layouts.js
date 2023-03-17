import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";

const Layouts = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Layouts</h1>
      <Container>
      <p className="lead text-center">
        Bootstrap uses a 12-column grid system to layout content on a page.
        Containers are used to provide a fixed-width container for content, and
        rows are used to group content horizontally within a container. Columns
        are then used to organize and arrange content within each row.{" "}
      </p>
      <p className="lead text-center">
        By specifying the number of columns each piece of content should take
        up, you can create complex layouts that adjust based on screen size.
        This flexibility makes it easy to create responsive designs that look
        great on any device.
      </p>
      </Container>
      <div style={{ backgroundColor: "#F2F2F2", padding: "50px" }}>
        <Container style={{ backgroundColor: "white", padding: "20px" }}>
          <Row>
            <Col sm={12} md={6}>
              <div style={{ height: "100px", backgroundColor: "#D5E5F5", padding: "10px" }}>
                This is a 6 column wide container
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div style={{ height: "100px", backgroundColor: "#A2C4C9", padding: "10px" }}>
                This is a 6 column wide container
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ backgroundColor: "white", padding: "20px" }}>
          <Row>
            <Col sm={12} md={6}>
              <div style={{ height: "100px", backgroundColor: "#E0BBE4", padding: "10px" }}>
                This is a fluid container
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div style={{ height: "100px", backgroundColor: "#957DAD", padding: "10px" }}>
                This is a fluid container
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            backgroundColor: "white",
            padding: "20px",
            maxWidth: "500px",
          }}
        >
          <Row>
            <Col>
              <div style={{ height: "100px", backgroundColor: "#FF9AA2", padding: "10px" }}>
                This is a container with a max width of 500px and a border
                radius
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ backgroundColor: "white", padding: "20px" }}>
          <Row>
            <Col sm={6} md={3}>
              <div style={{ height: "100px", backgroundColor: "#D4F1F4", padding: "10px" }}>
                This is a small column with 3 breakpoints
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div style={{ height: "100px", backgroundColor: "#A2E2D9", padding: "10px" }}>
                This is a small column with 3 breakpoints
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div style={{ height: "100px", backgroundColor: "#FFC0CB", padding: "10px" }}>
                This is a small column with 3 breakpoints
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div style={{ height: "100px", backgroundColor: "#F3A0C1", padding: "10px" }}>
                This is a small column with 3 breakpoints
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
        <Container fluid style={{ backgroundColor: "white", padding: "20px" }}>
          <Row>
            <Col>
              <div
                style={{
                  height: "100px",
                  backgroundColor: "#D5E5F5",
                  marginBottom: "20px",
                  padding: "10px"
                }}
              >
                This is a full width container
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  height: "100px",
                  backgroundColor: "#A2C4C9",
                  marginBottom: "20px",
                  padding: "10px"
                }}
              >
                This is a full width container
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <div style={{ height: "100px", backgroundColor: "#E0BBE4", padding: "10px" }}>
                This is an 8 column wide container
              </div>
            </Col>
            <Col sm={4}>
              <div style={{ height: "100px", backgroundColor: "#957DAD", padding: "10px" }}>
                This is a 3 column wide container
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Layouts;
