import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col md={12} className=" mb-4">
            <Card className="h-100 bg-light border-0 rounded-0">
              <Card.Body style={{ minHeight: "33vh" }}>
                <Card.Title><h1 className="display-3">Welcome</h1></Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque lacus augue, vitae bibendum orci aliquet nec.
                </Card.Text>
                <hr></hr>
                <Button variant="dark" className="rounded-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="py-5">
          <Col md={6} className="mb-4">
            <Card className="h-100 border-0 rounded-0 bg-dark text-white">
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque lacus augue, vitae bibendum orci aliquet nec.
                </Card.Text>
                <Button variant="light" className="rounded-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 border-0 rounded-0 bg-dark text-white">
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque lacus augue, vitae bibendum orci aliquet nec.
                </Card.Text>
                <Button variant="light" className="rounded-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 rounded-0 bg-light">
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque lacus augue, vitae bibendum orci aliquet nec.
                </Card.Text>
                <Button variant="secondary" className="rounded-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 rounded-0 bg-light">
              <Card.Body>
                <Card.Title>Card 5</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque lacus augue, vitae bibendum orci aliquet nec.
                </Card.Text>
                <Button variant="secondary" className="rounded-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 rounded-0 bg-light">
              <Card.Body>
                <Card.Title>Card 6</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque lacus augue, vitae bibendum orci aliquet nec.
                </Card.Text>
                <Button variant="secondary" className="rounded-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;