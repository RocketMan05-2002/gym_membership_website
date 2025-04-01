import React from "react";
import "./header.css";
import header from "../../assets/header.jpg";

const Header = () => {
  return (
    <div className="gym__header">
      <div className="gym__header-content">
        <h1 className="gradient__text">
          Ready to kill your 'old self ' and be upstoppable?
        </h1>
        <p>
          Achieve your fitness goals with expert training, modern equipment, and
          personalized workout plans. Join us today for strength, endurance, and
          a healthier lifestyle!
        </p>
        <div className="gym__header-content_input">
          <input type="email" placeholder="your email addresss" />
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="gym__header-image">
        <img src={header} alt="header" />
      </div>
    </div>
  );
};

export default Header;
