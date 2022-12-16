import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
function Header({ currentPage, pageChange }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" id="header" bg="dark">
        <Container fluid>
          <Navbar.Brand id="heading" href="/">
            sheltr
          </Navbar.Brand>
          <span id="phrase" className="navbar-text text-info italic">
            Adopt a pet today!
          </span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/adopt">
                Adopt
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/donate">
                Donate
              </Link>
              <NavDropdown
                variant="outline-success dark"
                className=" dropdown-menu-dark"
                title="Account"
                id="navbarDropdown"
              >
                {Auth.loggedIn() ? (
                  <NavDropdown.Item className="nav-link disabled">
                    {sessionStorage.getItem("user")}
                  </NavDropdown.Item>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
                <NavDropdown.Divider />
                {Auth.loggedIn() ? (
                  <>
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>

                    <NavDropdown.Item
                      className="nav-link"
                      onClick={() => Auth.logout()}
                    >
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
