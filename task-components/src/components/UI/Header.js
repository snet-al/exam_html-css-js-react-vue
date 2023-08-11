import React from "react";
import "../../App.css";
import Toggle from "./Toggle";
import Button from "./Button";

const Header = ({onChange, onFetchMoreClick }) => {
  return (
    <header>
      <h1 className="title">Photo Fetcher</h1>
      <div className="first-container">
        <Toggle onChange={onChange} />
        <p className="toggle-text">Make photos grayscale</p>
        <Button onClick={onFetchMoreClick}/>
      </div>
    </header>
  );
};

export default Header;
