import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu"
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <form action="#" className="side-nav-search-form">
          <div className="form-group">
            <input
              type="text"
              className="search-field"
              name="search-field"
              placeholder="Search..."
            />
            <button className="side-nav-search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <div className="row ">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + "/digital-agency"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/creative-agency"}>
                  Creative Agency
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>
                  Personal Portfolio
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/home-startup"}>
                  Home Startup
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/corporate-agency"}>
                  Corporate Agency
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Contact Information</span>
                  <p>
                    B-239, Royal Plaza, Opp-
                    <br /> Pramukh park soc., B.R.T.S Road,
                    <br /> Simada Surat,Gujrat 395006.{" "}
                  </p>
                </address>
                <address className="address">
                  <span className="title">We're Available 24/7. Call Now.</span>
                  <a href="tel:+919724363833" className="tel">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
                      ></path>
                    </svg>{" "}
                    +91 9724363833
                  </a>
                  <a href="mailto:info@codexbyte.com" className="tel">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>{" "}
                    info@codexbyte.com
                  </a>
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Find us here</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
                    <li>
                      <a href="https://facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>

                    <li>
                      <a href="https://instagram.com/">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
