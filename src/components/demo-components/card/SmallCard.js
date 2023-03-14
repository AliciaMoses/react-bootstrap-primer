import React from "react";
import { Card, Button } from "react-bootstrap";

const SmallCard = () => {
  return (
    <Card style={{ width: "18rem", paddingTop: "10px" }}>
      <Card.Img variant="top" src="https://picsum.photos/200/150" />
      <Card.Body>
        <Card.Title>Small Card Example</Card.Title>
        <Card.Text>
          This is a smaller card with some sample text. You can add more text
          here to customize it to your needs.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default SmallCard;
