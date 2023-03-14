import React from "react";
import { Card } from "react-bootstrap";

const WideCard = () => {
  return (
    <Card bg="dark" text="white">
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Wide Card Title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Muted text</small>
      </Card.Footer>
    </Card>
  );
};

export default WideCard;
