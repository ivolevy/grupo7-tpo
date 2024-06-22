import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Nav.css";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CustomNav = () => {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      id="nav"
      sticky="top"
      className="w-full bg-gray-bizio py-0 mb-4"
    >
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-[#393939]" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="flex justify-end collapseNav"
        >
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              exact
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </Nav.Link>
            <NavDropdown
              title={<FaRegUser className="text-blue-bizio" />}
              id="basic-nav-dropdown"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <NavDropdown.Item >
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  to="/register"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Register
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <div className="line"></div>
            <Nav.Link
              as={NavLink}
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div style={{ position: "relative" }}>
                <CiShoppingCart
                  id="cart"
                  className=" text-blue-bizio mt-[-4px] text-2xl w-12"
                />
                {cartQuantity > 0 && (
                  <span
                    className="badge text-white font-light"
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "0px",
                      borderRadius: "20%",
                      padding: "5px",
                      fontSize: "0.7rem",
                    }}
                  >
                    {cartQuantity}
                  </span>
                )}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
