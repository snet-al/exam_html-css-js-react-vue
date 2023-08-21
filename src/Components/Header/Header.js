import React from "react";
import "../../App.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Button from "../../Components/Button/Button";


const Header = () => {
  return (
      <>
      <h1 className="title">Photo Fetcher</h1>
      <section className="first-container">
          <ToggleSwitch/>
           <Button/>
      </section>
      </>
  );
};

export default Header;
