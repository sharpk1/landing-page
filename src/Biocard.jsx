import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 150px; // 200 * 0.755 = 150
  height: 200px;
  border-radius: 25%;
  flex: 0 0 auto;
  max-width: 100%;
`;

const BioCard = ({ imageSrc }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt="founder" />
      <p>
        Hello! I'm Kush! I founded Altiro in 2022 because I wanted to intertwine
        2 passions: writing code and helping people. My experience spans from
        web application development, mobile applications, app modernization,
        backend API development, and so much more. I've worked in a number of
        industries: e-commerce, oil & gas, Big 4 Accounting, real estate
        technology, manufacturing, eLearning/education, and the legal industry.
      </p>
    </CardContainer>
  );
};

BioCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default BioCard;
