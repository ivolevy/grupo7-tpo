<<<<<<< Updated upstream
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../../css/Main.css";
import "../../css/Nav.css";
import logo from "../../img/logo.png";

export const GuestNav = () => {
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
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className="bg-[#393939]"
				/>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="flex justify-end collapseNav"
				>
					<Nav>
						<Nav.Link as={NavLink} to="/" className="navItem">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/products" className="navItem">
							Products
						</Nav.Link>
						<NavDropdown
							title={<FaRegUser className="text-blue-bizio" />}
							id="basic-nav-dropdown"
							className="navItem"
						>
							<NavDropdown.Item as={NavLink} to="/login" className="navItem">
								Login
							</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/register" className="navItem">
								Register
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
=======
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

export const GuestNav = () => {

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
                        <Nav.Link as={NavLink} to="/" className="navItem">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" className="navItem">
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="navItem">
                            Contact
                        </Nav.Link>
                        <NavDropdown
                            title={<FaRegUser className="text-blue-bizio" />}
                            id="basic-nav-dropdown"
                            className="navItem"
                        >
                            <NavDropdown.Item as={NavLink} to="/login" className="navItem">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/register" className="navItem">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
>>>>>>> Stashed changes
};
