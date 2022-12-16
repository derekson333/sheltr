import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Auth from "../utils/auth";
function Header({ currentPage, pageChange }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" id="header" bg="dark">
        <Container fluid>
          <Navbar.Brand id="heading" href="#">
            Sheltr
          </Navbar.Brand>
          <span id="phrase" className="navbar-text text-info italic">
            Adopt a pet today!
          </span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link
                href="#about"
                onClick={() => pageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#adopt"
                onClick={() => pageChange("Adopt")}
                className={
                  currentPage === "Adopt" ? "nav-link active" : "nav-link"
                }
              >
                Adopt
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => pageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#donate"
                onClick={() => pageChange("Donate")}
                className={
                  currentPage === "Donate" ? "nav-link active" : "nav-link"
                }
              >
                Donate
              </Nav.Link>
              <NavDropdown
                variant="outline-success dark"
                className=" dropdown-menu-dark"
                title="Account"
                id="navbarDropdown"
              >
                {Auth.loggedIn() ? (
                  <NavDropdown.Item className='disabled'>
                    Hello {sessionStorage.getItem("user")}
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item
                    onClick={() => pageChange("Login")}
                    href="#login"
                  >
                    Login
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                {Auth.loggedIn() ? (
                  <>
                    <NavDropdown.Item
                      onClick={() => pageChange("Profile")}
                      href="#profile"
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => Auth.logout()}>
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item
                    onClick={() => pageChange("Signup")}
                    href="#signup"
                  >
                    Signup
                  </NavDropdown.Item>
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
