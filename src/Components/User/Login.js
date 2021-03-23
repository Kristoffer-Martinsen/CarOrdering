import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="Login w-75 mt-5 mx-auto">
      <Row>
        <Col>
          <h1>Login</h1>
          <Form className="w-50">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col>
          <h2>Have not registered yet?</h2>
          <Link to="/register">Register here</Link>
        </Col>
      </Row>
    </div>
  )
}
