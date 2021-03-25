import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const Register = (props) => {

  const api = axios.create( {
    baseURL: "https://localhost:5001/api/authmanagement"
  });

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  
  const createUser = async (e) => {
    e.preventDefault();

    if(userEmail==="" || userPassword==="") {
      return alert("Username/password can not be empty");
    }

    let res = await api.post('/register', { "username": userEmail, "email": userEmail, "password": userPassword });
    if(res.data.success === true)
    {
      props.history.push('/login/');
    } else {
      alert(res.data.errors);
    }
  }

  return (
    <div className="Register w-75 mt-5 mx-auto">
      <Row>
        <Col>
          <h1>Register here</h1>
          <Form className="w-50">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={userEmail}
                placeholder="Enter email"
                onChange={ (e) => setUserEmail(e.target.value) }
                 />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password"
                value={userPassword}
                placeholder="Password"
                onChange={ (e) => setUserPassword(e.target.value) } 
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={ createUser }>
              Register
            </Button>
          </Form>
        </Col>
        <Col>
          <h2>Already Signed up?</h2>
          <Link to="/login">Login here</Link>
        </Col>
      </Row>
    </div>
  )
}
