import React from "react";
import { Link } from "react-scroll";
import transparentWhiteImage from './assets/transparent-white.png'

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{ position: "fixed", top: 0 }}
    >
      <ul className="navbar-list">
        <li className="navbar-item navbar-logo">
          <a className="navbar-link" href="/">
          <img
            src={transparentWhiteImage}
            alt="Transparent White"
            className="main-page-image"
            style={{ width: "150px", height: "150px" }}
          />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
