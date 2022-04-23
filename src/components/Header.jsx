import React from "react";
import "../styles/Header.css";
import Carousel from "./Carousel";
import logoimg from "../assests/images/logokrg.png"

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg nav_main ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             <img src={logoimg} className="logo_krg" alt=""/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0  ul_header">
                <li className="nav-item ">
                  <a className="nav-link active text-light " aria-current="page" href="#">
                  ONE TEAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                  ABOUT KRG
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                  SERVICES
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link text-light" href="#">
                  WHERE WE HAVE BEEN
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                  WHERE WE ARE GOING
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                  NEWS
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                  CAREERS
                  </a>
                </li>

             
              </ul>
              <button type="button" className="contact_us_btn">
                CONTACT US
              </button>
            </div>
          </div>
        </nav>
        <Carousel />
    </>
  );
}

export default Header;
