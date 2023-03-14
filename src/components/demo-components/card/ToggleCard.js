import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const ToggleCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card style={{ width: "18rem", paddingTop: "10px" }}>
      <Card.Img variant="top" src="https://picsum.photos/300/200" />
      <Card.Body>
        <Card.Title>Toggleable Card</Card.Title>
        <Card.Text>
          This is some example text. Click the button below to toggle additional
          content.
        </Card.Text>
        {showDetails && (
          <div>
            <hr />
            <Card.Text>
              Here is some additional content that can be toggled.
            </Card.Text>
          </div>
        )}
        <Button onClick={handleButtonClick}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ToggleCard;
