import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const TextInputCard = () => {
  const [text, setText] = useState("Hello, world!");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newText = formData.get("text");
    setText(newText);
    form.reset();
  };

  return (
    <Card style={{ width: "18rem", paddingTop: "10px" }}>
      <Card.Img variant="top" src="https://picsum.photos/300/200" />
      <Card.Body>
        <Card.Title>Example Card</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group style={{ paddingBottom: "10px" }}>
            <Form.Label>Enter new text:</Form.Label>
            <Form.Control type="text" name="text" />
          </Form.Group>
          <Button type="submit">Change Text</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TextInputCard;
