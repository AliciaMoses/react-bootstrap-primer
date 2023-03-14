// import React and the necessary hooks
import React, { useState } from "react";

import { Form, DropdownButton, Dropdown } from "react-bootstrap";

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState("Select One");
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <Form>
      <Form.Group controlId="formDropdown">
        <Form.Label>Select an option:</Form.Label>
        <DropdownButton
          id="dropdown-button"
          title={selectedOption}
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Option 1">Option 1</Dropdown.Item>
          <Dropdown.Item eventKey="Option 2">Option 2</Dropdown.Item>
          <Dropdown.Item eventKey="Option 3">Option 3</Dropdown.Item>
        </DropdownButton>
      </Form.Group>
    </Form>
  );
};
export default DropdownForm;
