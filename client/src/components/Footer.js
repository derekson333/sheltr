import React from "react";

const footerStyle = {
  clear: "both",
  marginTop: "80%",
  marginBottom: "0%",
  position: "sticky",
  display: "none",
};

function Footer() {
  return (
    <footer
      style={{ footerStyle }}
      className="page-footer font-small blue pt-4"
    >
      <div id="icons" className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3"></div>
          <hr className="clearfix w-100 d-md-none pb-3"></hr>
          <div className="col-md-1 mb-md-0 mb-2">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/derekson333/sheltr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="footer-icon"
                    src={require("../img/github.png")}
                    alt="github icon"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-1 mb-md-0 mb-2">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://nhspca.org/adoptable-animals/?gclid=CjwKCAiA-dCcBhBQEiwAeWidtfZ4rYcSFtCt4QluuhXX4oZZDgLMSluQxVEtrTtXcjrcBHaXKL2cBBoCFssQAvD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="footer-icon"
                    src={require("../img/dog-seating.png")}
                    alt="nhpca logo"
                  ></img>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-1 mb-md-0 mb-2">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.pawsitivityservicedogs.com/ukraine?gclid=CjwKCAiA-dCcBhBQEiwAeWidte_xDboQ5kwrKa6wsdWUMF57X7cqWJvNRzgt-9cZJR7Bkme5c-MzeBoCgTsQAvD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="footer-icon"
                    src={require("../img/animal-care.png")}
                    alt="animal care logo"
                  ></img>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="italic footer-copyright">© 2022 Copyright</div>
    </footer>
  );
}

export default Footer;
