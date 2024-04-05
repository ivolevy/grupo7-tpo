import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Nav.css';

export const CustomNav = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="nav" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="110"
            height="auto"
            className="d-inline-block align-top logoNav"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link
              href="#home"
              className={`navItem ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={`navItem ${activeLink === 'features' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('features')}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={`navItem ${activeLink === 'pricing' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('pricing')}
            >
              Pricing
            </Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown" className='navItem'>
              <NavDropdown.Item href="#action/3.1">Gaming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Graphic design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Office & others</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button id='navButton'>Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
