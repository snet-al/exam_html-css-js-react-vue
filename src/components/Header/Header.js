import React from "react";
import "../../App.css";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import ImageFetcherButton from "../UI/ImageFetcherButton/ImageFetcherButton";
import Title from "../UI/Title/Title";


const Header = () => {
  return (
      <>
      <Title/>
      <section className="first-container">
          <ToggleSwitch/>
          <ImageFetcherButton/>
      </section>
      </>
  );
};

export default Header;
