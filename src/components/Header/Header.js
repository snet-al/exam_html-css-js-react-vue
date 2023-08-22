import React from "react";
import "../../App.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import FetchImageButton from "../FetchImageButton/FetchImageButton";


const Header = () => {
  return (
      <>
      <h1 className="title">Photo Fetcher</h1>
      <section className="first-container">
          <ToggleSwitch/>
          <FetchImageButton/>
      </section>
      </>
  );
};

export default Header;
