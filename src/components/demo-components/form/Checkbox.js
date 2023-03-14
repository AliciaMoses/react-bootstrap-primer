import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CheckboxForm = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [otherValue, setOtherValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    const newSelectedItems = [...selectedItems];

    if (value === "other") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }

    if (newSelectedItems.includes(value)) {
      newSelectedItems.splice(newSelectedItems.indexOf(value), 1);
    } else {
      newSelectedItems.push(value);
    }

    setSelectedItems(newSelectedItems);
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedItems.length === 0) {
      alert("Please select at least one item");
      return;
    }
    if (selectedItems.includes("other") && otherValue.trim() === "") {
      alert('Please enter a value for "Other"');
      return;
    }

    const selectedItemsText = selectedItems
      .map((item) => (item === "other" ? otherValue : item))
      .join(", ");

    alert(`Selected items: ${selectedItemsText}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="checkboxMenu">
        <Form.Check
          type="checkbox"
          label="Item 1"
          value="item1"
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Item 2"
          value="item2"
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Item 3"
          value="item3"
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Other"
          value="other"
          onChange={handleChange}
        />
        {showInput && (
          <Form.Control
            type="text"
            placeholder="Enter other item"
            value={otherValue}
            onChange={handleOtherInputChange}
          />
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CheckboxForm;
