import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import transparentWhiteImage from "./assets/transparent-white.png";
import "./MouseScroll.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Adjust the scroll threshold as per your requirement
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSize = isScrolled
    ? { width: "90px", height: "90px" }
    : { width: "150px", height: "150px" };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      style={{ position: "fixed", top: 0 }}
    >
      <ul className="navbar-list">
        <li className="navbar-item navbar-logo">
          <a className="navbar-link" href="/">
            <img
              src={transparentWhiteImage}
              alt="Transparent White"
              className={`main-page-image ${isScrolled ? "shrink" : ""}`}
              style={logoSize}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
