import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../app/_actions/user.actions';

export const Login = ( props ) => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    dispatch(userActions.login(userEmail, userPassword));


    /*
    let res = await api.post("/login", { "email": userEmail, "password": userPassword });
    if(res.data.success === true) {
      console.log(res);
      props.history.push('/');
    } else {
      alert(res.data.errors);
    }
    */
  }

  return (
    <div className="Login w-75 mt-5 mx-auto">
      <Row>
        <Col>
          <h1>Login</h1>
          <Form className="w-50">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
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
                value={userPassword}
                placeholder="Password"
                onChange={ (e) => setUserPassword(e.target.value) }
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={ handleLogin }>
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
