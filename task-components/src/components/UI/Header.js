import React from "react";
import "../../App.css";
import Toggle from "./Toggle";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <h1 className="title">Photo Fetcher</h1>
      <div className="first-container">
        <Toggle/>
        <p className="toggle-text">Make photos grayscale</p>
        <Button/>
      </div>
    </div>
  );
};

export default Header;
