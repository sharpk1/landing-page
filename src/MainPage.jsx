import React, { useEffect, useState, useRef } from "react";
import MouseScroll from "./MouseScroll";
import Navbar from "./Navbar";
import { Element } from "react-scroll";
import ScrollProgress from "./ScrollProgress";
import { CiMobile4, CiMonitor, CiDatabase } from "react-icons/ci";
import { RiShip2Line } from "react-icons/ri";
import { Link } from "react-scroll";
import "./MainPage.css";
import ProjectForm from "./ProjectForm";
import BioCard from "./Biocard";
import bioImage from "./assets/fixed.jpg";

const MainPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showMobileText, setShowMobileText] = useState(false);
  const [showMonitorIcon, setShowMonitorIcon] = useState(false);
  const [showContainerIcon, setShowContainerIcon] = useState(false);
  const [showShipIcon, setShowShipIcon] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const monitorRef = useRef(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const monitorIcon = document.getElementById("monitor-icon");

      if (monitorIcon) {
        const rect = monitorIcon.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        setShowMonitorIcon(isVisible);
      }
      const monitorElement = monitorRef.current;

      if (monitorElement) {
        const rect = monitorElement.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        setShowMonitorIcon(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

        setShowMobileText(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const databaseIcon = document.getElementById("database-icon");

      if (databaseIcon) {
        const rect = databaseIcon.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
        setShowContainerIcon(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shipIcon = document.getElementById("ship-icon");

      if (shipIcon) {
        const rect = shipIcon.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
        setShowShipIcon(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Element name="home">
        <ScrollProgress />
      </Element>
      <MouseScroll />

      <div className="main-page">
        <div className={`main-page-content ${fadeIn ? "fade-in" : ""}`}>
          <h1 className={`main-page-title ${fadeIn ? "fade-in" : ""}`}>
            Let's make your idea a reality.
          </h1>

          {/* <p className="main-page-description">
            Let's make your idea a reality.
          </p> */}
          <Link
            activeClass="active"
            className="navlink"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="main-page-button">Get Started</button>
          </Link>
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
              size={isMobile ? 50 : 100}
              style={{
                marginTop: "-20px",
                position: "absolute",
                transform: showMobileText
                  ? `translateX(${isMobile ? "-150px" : "-438px"})`
                  : "translateX(0)",
                transition: "transform 0.5s",
              }}
            />
            {showMobileText && (
              <div className="main-page-title fade-in">
                Mobile application development
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="slide-item" ref={monitorRef}>
            <CiMonitor
              color="white"
              size={isMobile ? 50 : 100}
              style={{
                marginTop: "-20px",
                position: "absolute",
                transform: showMonitorIcon
                  ? `translateX(${isMobile ? "150px" : "400px"})`
                  : "translateX(0)",
                transition: "transform 0.5s",
              }}
            />
            {showMonitorIcon && (
              <div className="main-page-title fade-in">
                Web application development
              </div>
            )}
          </div>
          <div className="slide-item">
            <CiDatabase
              id={"database-icon"}
              style={{
                marginTop: "-20px",
                position: "absolute",
                transform: showContainerIcon
                  ? `translateX(${isMobile ? "-170px" : "-450px"})`
                  : "translateX(0)",
                transition: "transform 0.5s",
              }}
              color="white"
              size={isMobile ? 50 : 100}
            />
            {showMonitorIcon && (
              <div className="main-page-title fade-in">
                Backend integration and databases
              </div>
            )}
          </div>
          <div className="slide-item">
            <RiShip2Line
              id="ship-icon"
              color="white"
              size={isMobile ? 50 : 100}
              style={{
                marginTop: "-20px",
                position: "absolute",
                transform: showShipIcon
                  ? `translateX(${isMobile ? "170px" : "430px"})`
                  : "translateX(0)",
                transition: "transform 0.5s",
              }}
            />
            {showShipIcon && (
              <div className="main-page-title fade-in">
                Cloud infrastructure and Dev Ops
              </div>
            )}
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
        <br />
      </Element>
      <Element name="about">
        <h1
          style={{
            flexWrap: "wrap",
            alignContent: "space-between",
            display: "flex",
            justifyContent: "center",
          }}
          className={`main-page-title ${fadeIn ? "fade-in" : ""}`}
        >
          About Altiro
        </h1>
      </Element>
      <h2
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: "white",
          marginTop: "20px",
          marginBottom: "20px",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        {/* Altiro LLC is a leading software consulting firm that specializes in web
        development, mobile development, backend/databases, and cloud
        infrastructure/devops. Our team of experts delivers cutting-edge
        solutions customized to your needs. Get in touch with us to discuss your
        software development goals. */}
        <BioCard imageSrc={bioImage} />
      </h2>

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
      <br />
      <Element name="work">
        <h1
          style={{
            flexWrap: "wrap",
            alignContent: "space-between",
            display: "flex",
            justifyContent: "center",
          }}
          className={`main-page-title ${fadeIn ? "fade-in" : ""}`}
        >
          Work with Us
        </h1>
      </Element>
      <ProjectForm />
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
      <br />
    </>
  );
};

export default MainPage;
