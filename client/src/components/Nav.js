import React from "react";

function Nav({ currentPage, pageChange }) {
  return (
    <ul style={{ float: "right" }} className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => pageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
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
        <a
          href="#contact"
          onClick={() => pageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => pageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
    </ul>
  );
}

export default Nav;
