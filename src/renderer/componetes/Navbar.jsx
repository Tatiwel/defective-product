import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/App.css';

function Navbar(props) {
  const [activeItem, setActiveItem] = useState('home');

  function handleItemClick(itemName) {
    setActiveItem(itemName);
    props.onItemClick(itemName);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={activeItem === 'home' ? 'active' : ''}
              onClick={() => handleItemClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={activeItem === 'about' ? 'active' : ''}
              onClick={() => handleItemClick('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={activeItem === 'contact' ? 'active' : ''}
              onClick={() => handleItemClick('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;
