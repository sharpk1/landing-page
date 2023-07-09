import React from "react";
import PropTypes from "prop-types";

const BioCard = ({ imageSrc }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <img
        src={imageSrc}
        alt="founder"
        style={{ width: "200px", height: "200px", borderRadius: "25%" }}
      />
      <p>
        Hello! I'm Kush! I founded Altiro in 2022 because I wanted to intertwine
        2 passions: writing code and helping people. My experience spans from
        web application development, mobile applications, app modernization,
        backend API development, and so much more. I've worked in a number of
        industries: e-commerce, oil & gas, Big 4 Accounting, real estate
        technology, manufacturing, eLearning/education, and the legal industry.
      </p>
    </div>
  );
};

BioCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default BioCard;
