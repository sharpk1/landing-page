import React, { useEffect, useState } from "react";
import "../src/scroll.css";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentProgress = (scrollTop / documentHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
        <div className="scroll-progress-headers">
          {/* Link for Desktop */}
          <Link
            activeClass="active"
            className="navlink desktop-link"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h2>Home</h2>
          </Link>
          <Link
            activeClass="active"
            className="navlink desktop-link"
            to="services"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h2>Services</h2>
          </Link>
          <Link
            activeClass="active"
            className="navlink desktop-link"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h2>About</h2>
          </Link>
          <Link
            activeClass="active"
            className="navlink desktop-link"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h2>Work with Us</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
