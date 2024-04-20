import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Nav.css";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export const CustomNav = () => {
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
              exact // Esto asegura que el NavLink se active solo cuando la ruta sea exacta
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              className="navItem"
              activeClassName="active"
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="navItem"
              activeClassName="active"
            >
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="navItem">
              <FaRegUser className="flex align-middle m-auto w-10 text-blue-600" />
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              <CiShoppingCart id="cart" className="text-blue-600 text-xl flex align-middle m-auto w-10" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
