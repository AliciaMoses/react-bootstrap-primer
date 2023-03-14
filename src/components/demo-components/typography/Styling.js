import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Styling = () => {
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000000");

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ fontSize: `${fontSize}px`, color: color }}>Heading 1</h1>
          <p style={{ fontSize: `${fontSize}px`, color: color }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Form>
            <Form.Group controlId="fontSize">
              <Form.Label>Font size: {fontSize} px</Form.Label>
              <Form.Control
                type="range"
                min={12}
                max={36}
                value={fontSize}
                onChange={handleFontSizeChange}
              />
            </Form.Group>
            <Form.Group controlId="color">
              <Form.Label>Color: {color}</Form.Label>
              <Form.Control
                type="color"
                value={color}
                onChange={handleColorChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Styling;