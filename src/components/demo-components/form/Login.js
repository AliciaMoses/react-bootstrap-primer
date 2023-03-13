import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Forms.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className="px-4 py-3">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="login-form-label">Email address</Form.Label>
        <Form.Control className="login-form-control" type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
      </Form.Group>
      <Form.Group className="login-form-group" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
};

export default Login;