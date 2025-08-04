// src/sections/MainSection.jsx
import React from "react";
import "../styles/MainSection.css";
import mainImage from "../assets/p6.jpg";

const MainSection = () => {
  return (
    <section
      id="main"
      className="main-section"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="main-overlay"></div>
      <div className="main-text">
        <h2>아늑한 공간에서 힐링</h2>
        <p>
          특별한 날, 소중한 사람들과 함께 하는
          <br />
          잊지 못 할 순간을 만들어 보세요.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
