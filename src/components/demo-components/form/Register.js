import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "./Forms.css";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    const form = formRef.current;

    if (form.checkValidity() === false || !passwordsMatch) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    const form = formRef.current;
    const confirmPassword =
      name === "password" ? form.confirmPassword.value : form.password.value;

    setPasswordsMatch(confirmPassword === value);
  };

  return (
    <Form
      ref={formRef}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter first name" />
        <Form.Control.Feedback type="invalid">
          Please enter a valid first name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter last name" />
        <Form.Control.Feedback type="invalid">
          Please enter a valid last name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          required
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handlePasswordChange}
        />
        {!passwordsMatch && (
          <Form.Text className="text-danger">Passwords do not match.</Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
