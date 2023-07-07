import React, { useState, useEffect } from "react";
import axios from 'axios'
import './scroll.css'

const ProjectForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };
  
  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary validation or data processing here
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      projectDescription,
    };

    // Make an HTTP POST request to the backend endpoint
    axios.post("http://localhost:3000/api/send-email", formData)
      .then((response) => {
        console.log("Email sent successfully");
        // Clear form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setProjectDescription("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        margin: "0 auto",
      }}
      onSubmit={handleSubmit}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "center", color: "white" }}>
        Tell us about your project
      </h2>
      {/* <div style={{ display: "flex", marginBottom: "20px" }}> */}
      <label style={{ marginBottom: "20px", color: "white", fontWeight: "bold" }}>
        First Name
        <input
          style={{
            marginLeft: isMobile ? '5px' : '0px',
            width: isMobile ? '90%' : '100%',
            padding: "5px",
            borderRadius: "20px",
            height: "40px",
            marginTop: "5px"
          }}
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </label>
      <label style={{ marginBottom: "20px", color: "white", fontWeight: "bold" }}>
        Last Name
        <input
          style={{
            marginLeft: isMobile ? '5px' : '0px',
            width: isMobile ? '90%' : '100%',
            padding: "5px",
            borderRadius: "20px",
            height: "40px",
            marginTop: "5px"
          }}
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </label>
      {/* </div> */}
      <label style={{ marginBottom: "20px", color: "white", fontWeight: "bold" }}>
        Email Address
        <input
          style={{
            marginLeft: isMobile ? '5px' : '0px',
            width: isMobile ? '90%' : '100%',
            padding: "5px",
            borderRadius: "20px",
            height: "40px",
            marginTop: "5px"
          }}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label style={{ marginBottom: "20px", color: "white", fontWeight: "bold" }}>
        Phone Number
        <input
          style={{
            marginLeft: isMobile ? '5px' : '0px',
            width: isMobile ? '90%' : '100%',
            padding: "5px",
            borderRadius: "20px",
            height: "40px",
            marginTop: "5px"
          }}
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </label>
      <label style={{ marginBottom: "20px", color: "white", fontWeight: "bold" }}>
        Project Description
        <textarea
          style={{
            marginLeft: isMobile ? '5px' : '0px',
            width: isMobile ? '90%' : '100%',
            padding: "5px",
            borderRadius: "20px",
            height: "120px",
            marginTop: "5px"
          }}
          value={projectDescription}
          onChange={(event)=> setProjectDescription(event.target.value)}
          required
        />
      </label>
      <button
        style={{
          fontSize: "18px",
          backgroundColor: '#14af62',
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          width: "50%",
          borderRadius: "50px",
          height: "50px",
          margin: "0 auto",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;
