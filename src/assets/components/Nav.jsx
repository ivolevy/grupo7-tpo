import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Nav.css";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export const CustomNav = () => {
  const [activeLink, setActiveLink] = useState("home");

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
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="flex justify-end"
        >
          <Nav>
            <Nav.Link
              href="/"
              className={`navItem ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="products"
              className={`navItem ${activeLink === "products" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("contact")}
            >
              Products
            </Nav.Link>

            <Nav.Link
              href="contact"
              className={`navItem ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link>
              <CiShoppingCart id="cart" className="text-blue-600 text-2xl" />
            </Nav.Link>
            <FaRegUser className="flex align-middle m-auto w-10 text-blue-600" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
