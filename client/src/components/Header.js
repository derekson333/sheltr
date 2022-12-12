import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Header({ currentPage, pageChange }) {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant="dark" id="header" bg="dark">
        <Container fluid>
          <Navbar.Brand id="heading" href="#">
            Adoptimals
          </Navbar.Brand>
          <span className="navbar-text text-info italic">Adopt a pet today!</span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
            >
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
                <NavDropdown.Item
                  onClick={() => pageChange("Login")}
                  href="#login"
                >
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => pageChange("Logout")}
                  href="#logout"
                >
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => pageChange("Profile")}
                  href="#profile"
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => pageChange("Signup")}
                  href="#signup"
                >
                  Signup
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search a pet"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
