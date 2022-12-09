import React from "react";
import "../css/styles.css";
function Nav({ currentPage, pageChange }) {
  return (
    <>
      <div className="margin-left collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              href="#about"
              onClick={() => pageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#adopt"
              onClick={() => pageChange("Adopt")}
              className={
                currentPage === "Adopt" ? "nav-link active" : "nav-link"
              }
            >
              Adopt
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a
              href="#contact"
              onClick={() => pageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">
                Login
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
              <div class="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Signup
              </a>
            </div>
          </li>
        </ul>
        <form id = 'search' className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search a pet
          </button>
        </form>
      </div>
    </>
  );
}

export default Nav;
