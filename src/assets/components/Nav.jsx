import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Nav.css";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";


export const CustomNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="nav" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="110"
            height="auto"
            className="d-inline-block align-top logoNav"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex justify-end">
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
              className="navItem"
              activeClassName="active"
              exact
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              className="navItem"
              activeClassName="active"
            >
              Productos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="contact"
              className="navItem"
              activeClassName="active"
            >
              Contacto
            </Nav.Link>
            <NavDropdown title={<FaRegUser className="text-blue-600"/>} id="basic-nav-dropdown" className="navItem" activeClassName="active">
              <NavDropdown.Item href="#action/3.1">
                Inicia sesión
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registrarse
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
              <CiShoppingCart id="cart" className="text-blue-600 text-xl flex align-middle m-auto w-10" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


