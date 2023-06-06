import React, { useEffect, useState } from "react";
import MouseScroll from "./MouseScroll";
import Navbar from "./Navbar";
import { Element } from "react-scroll";
import ScrollProgress from "./ScrollProgress";
import { CiMobile4, CiMonitor, CiDatabase } from "react-icons/ci";
import { RiShip2Line } from "react-icons/ri";

const MainPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const iconsElement = document.querySelector(".icons-container");
      if (iconsElement) {
        const iconsPosition = iconsElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (iconsPosition < windowHeight) {
          setShowIcons(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div className={`icons-container ${showIcons ? "slide-in" : ""}`}>
          <div
            className="slide-item"
            style={{
              opacity: showIcons ? 1 : 0,
              transform: `translateX(${showIcons ? 0 : -100}px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <CiMobile4 color="white" size={100} />
          </div>
          <div
            className="slide-item"
            style={{
              opacity: showIcons ? 1 : 0,
              transform: `translateX(${showIcons ? 0 : -100}px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <CiMonitor color="white" size={100} />
          </div>
          <div
            className="slide-item"
            style={{
              opacity: showIcons ? 1 : 0,
              transform: `translateX(${showIcons ? 0 : -100}px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <RiShip2Line color="white" size={100} />
          </div>
          <div
            className="slide-item"
            style={{
              opacity: showIcons ? 1 : 0,
              transform: `translateX(${showIcons ? 0 : -100}px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <CiDatabase color="white" size={100} />
          </div>
        </div>
        <br />
      </Element>
    </>
  );
};

export default MainPage;
