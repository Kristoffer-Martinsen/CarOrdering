import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.css';


export const NavbarComponent = () => {
  return (
    <div className="NavbarComponent">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">Cars</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="not-loggen-in">
              <Link className="login" to="/login">Login</Link>
              <Link className="register" to="/register">Register</Link>
            </div>
            <div className="logged-in">
              <Link className="profile" to="/profile">Profile</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
