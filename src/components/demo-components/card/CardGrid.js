import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CardGrid = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {[...Array(6)].map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/id/${idx + 1}/300/200`}
              />
              <Card.Body>
                <Card.Title>Card {idx + 1}</Card.Title>
                <Card.Text>
                  This is a sample card with some text content. You can replace
                  this with your own content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
