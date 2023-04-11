import React from "react";
import ReactDOM from "react-dom/client";
import "./Card.css";

import logo from "../Images/splash.png";
const Card = () => {
  return (
    <div className="cardItem">
      <img src={logo} alt="fish images" />
      <div className="speciesNme"> Card UI </div>
      <p> Test</p>
    </div>
  );
};

export default Card;
