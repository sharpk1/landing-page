import React, { useEffect, useState } from "react";
import MouseScroll from "./MouseScroll";
import Navbar from "./Navbar";
import { Element } from "react-scroll";
import ScrollProgress from "./ScrollProgress";
import { CiMobile4, CiMonitor, CiDatabase } from "react-icons/ci";
import { RiShip2Line } from "react-icons/ri";
import "./MainPage.css"; // Import your custom CSS file

const MainPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mobileIcon = document.getElementById("mobile-icon");

      if (mobileIcon) {
        const rect = mobileIcon.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        setShowIcons(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollProgress />
      <MouseScroll />
      <div className="main-page">
        <div className={`main-page-content ${fadeIn ? "fade-in" : ""}`}>
          <h1 className={`main-page-title ${fadeIn ? "fade-in" : ""}`}>
            Welcome from Altiro!
          </h1>
          <p className="main-page-description">
            Let's make your idea a reality.
          </p>
          <button className="main-page-button">Get Started</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Element name="test2" className="element">
        <h1
          style={{
            flexWrap: "wrap",
            alignContent: "space-between",
            display: "flex",
            justifyContent: "center",
          }}
          className={`main-page-title ${fadeIn ? "fade-in" : ""}`}
        >
          Services
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="slide-item">
            <CiMobile4
              id="mobile-icon"
              color="white"
              size={100}
              style={{
                transform: showIcons ? "translateX(-500px)" : "translateX(0)",
                transition: "transform 0.5s",
              }}
            />
          </div>
          {/* <div className="slide-item">
            <CiMonitor color="white" size={100} />
          </div>
          <div className="slide-item">
            <RiShip2Line
              color="white"
              size={100}
              style={{ transform: showIcons ? "translateX(-300px)" : "none" }}
            />
          </div>
          <div className="slide-item">
            <CiDatabase color="white" size={100} />
          </div> */}
        </div>
        <br />
      </Element>
    </>
  );
};

export default MainPage;
