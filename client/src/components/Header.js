import React from "react";
function Header() {
  return (
    <>
      <h1 id="heading" className="navbar-brand">
        Animals
      </h1>
      <span class="navbar-text">Adopt a pet today!</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </>
  );
}

export default Header;
