import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ContentChangeCard = () => {
  const [cardTitle, setCardTitle] = useState("My Card Title");
  const [cardText, setCardText] = useState("My Card Text");

  const handleTitleChange = () => {
    setCardTitle("New Card Title");
  };

  const handleTextChange = () => {
    setCardText("New Card Text");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
      <ButtonGroup>
        <Button variant="primary" onClick={handleTitleChange}>
          Change Title
        </Button>
        <Button variant="secondary" onClick={handleTextChange}>
          Change Text
        </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ContentChangeCard;
